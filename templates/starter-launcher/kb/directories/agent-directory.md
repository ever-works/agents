# MCP server and AI agent directories

Directories for MCP servers and AI agents.

Generated from `../data/launch-platforms.csv`. Edit the CSV, not this file.

| Platform | Automation | Cost | Traffic | Difficulty | When | Status |
|----------|------------|------|---------|------------|------|--------|
| [MCP Registry (official)](https://registry.modelcontextprotocol.io) | auto | free | medium | medium | launch-day | up |
| [modelcontextprotocol/servers (community list)](https://github.com/modelcontextprotocol/servers) | auto | free | high | medium | launch-week | up |
| [Smithery](https://smithery.ai) | assisted | free | high | easy | launch-week | up |
| [Glama MCP servers](https://glama.ai/mcp/servers) | assisted | free | high | easy | launch-week | up |
| [PulseMCP](https://www.pulsemcp.com) | assisted | free | medium | easy | launch-week | up |
| [mcp.so](https://mcp.so) | assisted | free | medium | easy | launch-week | up |
| [cursor.directory](https://cursor.directory) | assisted | free | medium | easy | launch-week | up |
| [AI Agents Directory](https://aiagentsdirectory.com) | assisted | freemium | medium | easy | launch-week | up |
| [AI Agent Store](https://aiagentstore.ai) | assisted | freemium | medium | easy | launch-week | up |

## Platforms

### MCP Registry (official)

- id: `mcp-registry`
- site: https://registry.modelcontextprotocol.io | submit: https://github.com/modelcontextprotocol/registry
- method: registry-publish | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: medium | when: launch-day
- best for: mcp, ai, dev-tools
- needs: MCP server published to a package registry; server.json; namespace verification
- how: The official registry that MCP clients and other directories read from. Publish with the registry CLI after the package is on npm, PyPI or a container registry.
- status: up (checked 2026-11-22)

### modelcontextprotocol/servers (community list)

- id: `mcp-servers-repo`
- site: https://github.com/modelcontextprotocol/servers | submit: https://github.com/modelcontextprotocol/servers
- method: github-pr | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: launch-week
- best for: mcp, ai
- needs: Working MCP server; follow the README contribution rules
- how: The reference repository's README links community servers. Check whether it still accepts list additions or points to the registry instead.
- status: up (checked 2026-11-22)

### Smithery

- id: `smithery`
- site: https://smithery.ai
- method: registry-publish | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: easy | when: launch-week
- best for: mcp, ai
- needs: GitHub sign-in; MCP server repository
- how: MCP server directory and hosting. Connect the repository; hosted servers can be tried in one click.
- status: up (checked 2026-11-22)

### Glama MCP servers

- id: `glama-mcp`
- site: https://glama.ai/mcp/servers
- method: form | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: easy | when: launch-week
- best for: mcp, ai
- needs: Public MCP server repository
- how: Large MCP server index with quality and security scores. Claim the server and fix any flagged issues.
- status: up (checked 2026-11-22)

### PulseMCP

- id: `pulsemcp`
- site: https://www.pulsemcp.com | submit: https://www.pulsemcp.com/submit
- method: form | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: mcp, ai
- needs: Public MCP server
- how: MCP server directory with a weekly newsletter on new servers.
- status: up (blocks automated clients) (checked 2026-11-22)

### mcp.so

- id: `mcp-so`
- site: https://mcp.so
- method: form | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: mcp, ai
- needs: Public MCP server
- how: Community MCP server directory; submit the repository URL.
- status: up (checked 2026-11-22)

### cursor.directory

- id: `cursor-directory`
- site: https://cursor.directory
- method: form | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: mcp, ai, dev-tools
- needs: MCP server or editor rules
- how: Directory of MCP servers and rules for AI code editors.
- status: up (blocks automated clients) (checked 2026-11-22)

### AI Agents Directory

- id: `ai-agents-directory`
- site: https://aiagentsdirectory.com
- method: form | automation: assisted | cost: freemium | link: unknown, verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: agents, ai
- needs: Form
- how: Directory focused on AI agents and agent frameworks.
- status: up (checked 2026-11-22)

### AI Agent Store

- id: `ai-agent-store`
- site: https://aiagentstore.ai
- method: form | automation: assisted | cost: freemium | link: unknown, verify on the live listing | traffic: medium | difficulty: easy | when: launch-week
- best for: agents, ai
- needs: Form
- how: Marketplace and directory for AI agents and agencies that build them.
- status: up (checked 2026-11-22)
