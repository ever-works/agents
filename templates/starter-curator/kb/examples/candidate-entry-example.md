# Example — Candidate entry from primary sources

## Input

> Add `Cloudflare Agents` to the `awesome-mcp-servers` directory. URL:
> https://developers.cloudflare.com/agents/. The directory's scope is
> Model Context Protocol servers and adjacent tooling. Existing tags
> include `mcp-server`, `runtime`, `hosted`, `agent-framework`,
> `cloudflare`, `nodejs`, `serverless`. Schema fields: slug, name,
> status, homepage, repository, license, lastRelease, tags, sources.

## Good output

**Dedup check:** searched the index for `cloudflare-agents`,
`agents`, and `developers.cloudflare.com/agents`. No existing entry
matches. No near-duplicate found.

**Primary sources fetched:**

- https://developers.cloudflare.com/agents/
- https://github.com/cloudflare/agents

```yaml
slug: cloudflare-agents
name: Cloudflare Agents
status: candidate
requireAllApprovers: true

homepage: https://developers.cloudflare.com/agents/
repository: https://github.com/cloudflare/agents

license: Apache-2.0
pricing: freemium

lastRelease:
  version: # blank — repository ships continuously, no tagged release on the branch
  date:

tags:
  - agent-framework
  - cloudflare
  - serverless
  - runtime

proposedTags: []

sources:
  - https://developers.cloudflare.com/agents/
  - https://github.com/cloudflare/agents

submittedBy: starter-curator
submittedAt: 2026-05-29T08:00:00Z
```

### Entry page

```
# Cloudflare Agents

Cloudflare Agents is a runtime and SDK for building stateful AI agents
that run on Cloudflare's edge network. It exposes the Model Context
Protocol over Workers and Durable Objects.

Teams use it to host MCP servers and agent workflows close to their
data, with per-agent state, scheduled wake-ups, and built-in
transport. The runtime ships as an open-source SDK and a hosted
deployment target on Cloudflare's platform.

Sources:
- https://developers.cloudflare.com/agents/
- https://github.com/cloudflare/agents
```

**Flags for editor:** `lastRelease` is blank because the repository
ships from the main branch without tagged releases. Confirm whether
the schema should accept `commit` as a fallback signal.

**Tag rationale:** all four tags exist in the taxonomy. No new tag
proposed.
