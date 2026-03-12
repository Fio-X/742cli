import { describe, expect, test } from "bun:test";

import { createProjectBrief, listWorkflowNames, renderWorkflow } from "../src/core/workflows.ts";

describe("workflow catalog", () => {
  test("lists available workflow names in a stable order", () => {
    expect(listWorkflowNames()).toEqual(["prompt-lab", "release-prep", "repo-audit"]);
  });

  test("renders workflow details for known workflows", () => {
    const output = renderWorkflow("repo-audit");

    expect(output).toContain("Workflow: repo-audit");
    expect(output).toContain("Artifacts:");
    expect(output).toContain("README.md");
  });

  test("builds a project brief around the requested topic", () => {
    const output = createProjectBrief("OpenAI application repo");

    expect(output).toContain("Project Brief: OpenAI application repo");
    expect(output).toContain("Execution Loop:");
  });
});
