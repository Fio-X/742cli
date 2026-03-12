export type WorkflowTemplate = {
  name: string;
  goal: string;
  stages: string[];
  artifacts: string[];
};

const workflowCatalog: Record<string, WorkflowTemplate> = {
  "repo-audit": {
    name: "repo-audit",
    goal: "Turn a rough repository into a reviewer-friendly AI project.",
    stages: [
      "Inspect the repo structure and identify missing proof points.",
      "Define a runnable happy path with minimal setup.",
      "Add examples, docs, and repeatable validation commands."
    ],
    artifacts: ["README.md", "docs/DEVELOPMENT.md", "examples/workflows.md"]
  },
  "prompt-lab": {
    name: "prompt-lab",
    goal: "Iterate on prompt workflows for coding, research, and triage.",
    stages: [
      "Capture the task, constraints, and desired output format.",
      "Run multiple prompt variants against the same scenario.",
      "Record the winning pattern and the follow-up actions."
    ],
    artifacts: ["examples/workflows.md"]
  },
  "release-prep": {
    name: "release-prep",
    goal: "Package an experiment into a clear development milestone.",
    stages: [
      "Collect the visible changes and draft a short narrative.",
      "Verify tests, type checks, and a smoke run of the CLI.",
      "Prepare release notes and next-step work items."
    ],
    artifacts: ["README.md", "docs/DEVELOPMENT.md"]
  }
};

export function listWorkflowNames(): string[] {
  return Object.keys(workflowCatalog).sort();
}

export function getWorkflow(name: string): WorkflowTemplate | undefined {
  return workflowCatalog[name];
}

export function renderWorkflow(name: string): string {
  const workflow = getWorkflow(name);

  if (!workflow) {
    const available = listWorkflowNames().join(", ");
    throw new Error(`Unknown workflow \"${name}\". Available workflows: ${available}`);
  }

  const stageLines = workflow.stages.map((stage, index) => `${index + 1}. ${stage}`);
  const artifactLines = workflow.artifacts.map((artifact) => `- ${artifact}`);

  return [
    `Workflow: ${workflow.name}`,
    `Goal: ${workflow.goal}`,
    "Stages:",
    ...stageLines,
    "Artifacts:",
    ...artifactLines
  ].join("\n");
}

export function createProjectBrief(projectName: string): string {
  const trimmedName = projectName.trim();
  const subject = trimmedName.length > 0 ? trimmedName : "742cli";

  return [
    `Project Brief: ${subject}`,
    "Objective: build a small but credible AI-native developer tool.",
    "Research Questions:",
    "- Which workflows benefit most from command-line AI assistance?",
    "- What artifacts make experiments reproducible for collaborators?",
    "- How should examples and docs evolve alongside the code?",
    "Execution Loop:",
    "1. Inspect the current repo and isolate the smallest useful milestone.",
    "2. Implement a runnable command path with deterministic output.",
    "3. Capture learnings in examples, docs, and commit history."
  ].join("\n");
}

export function renderDemo(): string {
  return [
    "742cli demo",
    "- list research workflows",
    "- print a structured repo audit plan",
    "- generate a short project brief for the current milestone",
    "",
    "Try:",
    "bun run src/cli.ts list",
    "bun run src/cli.ts workflow repo-audit",
    "bun run src/cli.ts brief \"OpenAI trial application repo polish\""
  ].join("\n");
}
