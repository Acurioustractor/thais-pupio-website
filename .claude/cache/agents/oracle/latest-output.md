# Research Report: Figma MCP Server for Claude Code
Generated: 2026-02-05

## Summary

Figma provides an **official first-party MCP server** that integrates directly with Claude Code. There are two deployment options: a remote hosted server (recommended, easiest setup) and a local desktop server that runs through the Figma desktop app. No personal access token is needed -- the official server uses OAuth authentication via browser flow.

## Questions Answered

### Q1: What official or well-maintained Figma MCP servers exist?

**Answer:** Figma ships their own official MCP server. This is the recommended option.

| Server | Type | URL/Package | Maintained By |
|--------|------|-------------|---------------|
| **Figma Remote MCP** (RECOMMENDED) | Official, hosted | `https://mcp.figma.com/mcp` | Figma |
| **Figma Desktop MCP** | Official, local | `http://127.0.0.1:3845/mcp` | Figma |
| Figma-Context-MCP | Community | `github.com/GLips/Figma-Context-MCP` | GLips |
| mcp-figma (thirdstrandstudio) | Community | `github.com/thirdstrandstudio/mcp-figma` | Third Strand Studio |
| figma-developer-mcp | Community (npm) | `npm: figma-developer-mcp` | Community |

**Recommendation:** Use the official Figma Remote MCP server. It is maintained by Figma themselves, requires no npm packages or local setup, and uses OAuth for authentication.

**Source:** https://developers.figma.com/docs/figma-mcp-server/
**Confidence:** High

### Q2: How to configure in Claude Code's MCP settings?

**Answer:** One command for the remote server. Two options detailed below.

#### Option A: Remote MCP Server (RECOMMENDED -- no desktop app needed)

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Then authenticate:
1. In Claude Code, type `/mcp`
2. Select `figma`
3. Select **Authenticate**
4. A browser window opens -- click **Allow Access** in Figma
5. Back in Claude Code, you see: "Authentication successful. Connected to figma."

#### Option B: Desktop (Local) MCP Server

1. Open Figma desktop app (latest version)
2. Open a Figma Design file
3. Toggle to **Dev Mode** (keyboard shortcut: Shift+D)
4. In the inspect panel, find the MCP server section and click **Enable desktop MCP server**
5. Add to Claude Code:

```bash
claude mcp add --transport http figma-desktop http://127.0.0.1:3845/mcp
```

Or manually add to your MCP config (e.g., `~/.claude.json` or project `.mcp.json`):

```json
{
  "mcpServers": {
    "figma-desktop": {
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

**Source:** https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/
**Confidence:** High

### Q3: What authentication/tokens are needed?

**Answer:** The official Figma MCP server uses **OAuth 2.0 via browser SSO** -- NOT a personal access token. You authenticate through a browser popup when you first connect. No PAT or API key configuration is needed.

Key details:
- **Remote server:** OAuth flow triggered from `/mcp` command in Claude Code
- **Desktop server:** No additional auth needed (inherits your desktop app session)
- **PATs are NOT supported** by the official remote MCP server (this is a deliberate design decision by Figma)
- Some third-party community MCP servers DO accept PATs if you need headless/CI usage

**Requirements:**
- A Figma account with a **Dev or Full seat** on a paid plan (Professional, Organization, or Enterprise) for full rate limits
- Starter plan / View / Collab seats are limited to 6 tool calls per month

**Source:** https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server
**Confidence:** High

### Q4: What tools does the Figma MCP server provide?

**Answer:** The official server exposes these tools:

| Tool | Description |
|------|-------------|
| `get_design_context` | Returns design context (layout, styles, variables) for a Figma layer or selection. Default output format is React + Tailwind, customizable via prompt. Replaces the deprecated `get_code`. |
| `get_metadata` | Returns sparse XML of layer IDs, names, types, positions, sizes. Useful for breaking down large designs before calling `get_design_context` on specific parts. |
| `get_styles` | Returns variables and styles (colors, spacing, typography) from your selection. |
| `get_figjam_metadata` | Returns FigJam diagram metadata in XML, including node screenshots. |
| `get_code_connect_suggestions` | Detects and suggests mappings of Figma components to code components in your codebase (Code Connect). |
| `send_code_connect_mappings` | Confirms the suggested Code Connect mappings from above. |

Additional capabilities:
- **Screenshots:** The server can take screenshots of your Figma selection for layout fidelity (recommended to keep enabled)
- **Rule file creation:** Tool to create a rule file providing agents with context to translate designs into codebase-aware frontend code
- **Selection-based prompting** (desktop server only): Select a frame in the Figma app and prompt Claude about "my current selection"
- **URL-based prompting** (both servers): Paste a Figma frame/layer URL into your prompt

**Source:** https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/
**Confidence:** High

## Detailed Setup Instructions

### Step-by-Step for This Project

1. **Add the remote MCP server:**
   ```bash
   claude mcp add --transport http figma https://mcp.figma.com/mcp
   ```

2. **Restart Claude Code** (if it was already running).

3. **Authenticate:**
   - Type `/mcp` in Claude Code
   - Select `figma` from the list
   - Click **Authenticate**
   - Allow access in the browser popup

4. **Verify connection:**
   - Type `/mcp` again -- figma should show as connected

5. **Start using it:**
   - Copy a Figma frame URL and paste it into your prompt:
     ```
     Build the component shown in this Figma design: https://www.figma.com/design/FILE_KEY/...?node-id=X:Y
     ```
   - Or with the desktop server, select a frame in Figma and say:
     ```
     Implement the currently selected Figma frame
     ```

### Rate Limits

| Plan | Limit |
|------|-------|
| Starter / View / Collab seats | 6 tool calls per month |
| Dev or Full seat on Professional+ | Per-minute limits (same as Figma REST API Tier 1) |

### Tips for Best Results

- Use **specific frame/layer URLs** rather than entire file URLs -- this reduces context size
- For large designs, the agent will use `get_metadata` first to get an outline, then `get_design_context` on individual sections
- Keep the screenshot capability enabled for layout fidelity
- Specify your tech stack in the prompt (e.g., "using Next.js and Tailwind CSS") since default output is React + Tailwind
- Use Code Connect mappings if you have an existing component library

## Comparison: Remote vs Desktop Server

| Feature | Remote Server | Desktop Server |
|---------|--------------|----------------|
| Setup difficulty | One command | Requires desktop app + Dev Mode |
| Authentication | OAuth via browser | Inherits desktop session |
| Selection-based prompting | No (URL only) | Yes |
| Requires Figma desktop app | No | Yes |
| Works in CI/headless | Yes (after initial OAuth) | No |
| Rate limits | Same | Same |

## Sources

1. [Figma MCP Server - Developer Docs](https://developers.figma.com/docs/figma-mcp-server/) - Official documentation hub
2. [Remote Server Installation](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/) - Remote setup instructions
3. [Desktop Server Installation](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/) - Local setup instructions
4. [Tools and Prompts](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/) - Complete tool reference
5. [Guide to the Figma MCP Server](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) - Figma Help Center overview
6. [Claude Code + Figma MCP Server](https://www.builder.io/blog/claude-code-figma-mcp-server) - Builder.io tutorial
7. [Figma MCP Server Guide (GitHub)](https://github.com/figma/mcp-server-guide) - Official Figma GitHub guide
8. [Introducing our MCP server (Figma Blog)](https://www.figma.com/blog/introducing-figma-mcp-server/) - Announcement blog post

## Open Questions

- Whether the OAuth token persists across Claude Code sessions or requires re-authentication periodically
- Exact token count impact of screenshots vs text-only mode for context-limited workflows
