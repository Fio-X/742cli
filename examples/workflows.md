# AI Workflow Examples

This directory captures small, repeatable workflows for experimenting with AI-native developer tooling in `742cli`.

## 1. Repository Audit

Use this when a repository needs to feel more like an active technical project.

### Prompt Shape

```text
Goal: polish the repository for reviewer confidence.
Constraints: keep the scope tight, add runnable proof, and improve docs.
Required outputs: project structure, example files, development notes, and verifiable commands.
```

### Expected Artifacts

- A runnable CLI or script with deterministic output
- Example files that show prompt and session structure
- A development note that explains how the repo should evolve

## 2. Prompt Lab Iteration

Use this when comparing multiple prompting patterns for the same engineering task.

### Experiment Loop

1. Write three prompt variants for the same goal.
2. Evaluate which variant produces the clearest action plan.
3. Keep the winning prompt and record why it performed better.

### Sample Evaluation Notes

- Variant A was fast but too generic.
- Variant B produced the best task breakdown.
- Variant C added unnecessary scope.

## 3. Release Prep

Use this when packaging a research milestone into a reviewer-friendly update.

### Checklist

1. Run `bun test`.
2. Run the CLI demo path.
3. Update root docs with the current milestone and next steps.

### Example Command Flow

```bash
bun run src/cli.ts list
bun run src/cli.ts workflow repo-audit
bun run src/cli.ts brief "Repository milestone"
```
