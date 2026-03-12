import { createProjectBrief, listWorkflowNames, renderDemo, renderWorkflow } from "./core/workflows.ts";

function renderHelp(): string {
  return [
    "742cli",
    "A lightweight research CLI for AI-assisted developer workflows.",
    "",
    "Commands:",
    "  list                 List available workflow templates",
    "  workflow <name>      Print a specific workflow template",
    "  brief <topic>        Generate a short project brief",
    "  demo                 Show the repository demo path"
  ].join("\n");
}

function main(args: string[]): number {
  const [command = "help", ...rest] = args;

  try {
    switch (command) {
      case "help":
      case "--help":
      case "-h":
        console.log(renderHelp());
        return 0;
      case "list":
        console.log(listWorkflowNames().join("\n"));
        return 0;
      case "workflow": {
        const name = rest[0];

        if (!name) {
          throw new Error("Missing workflow name. Usage: workflow <name>");
        }

        console.log(renderWorkflow(name));
        return 0;
      }
      case "brief": {
        const topic = rest.join(" ");
        console.log(createProjectBrief(topic));
        return 0;
      }
      case "demo":
        console.log(renderDemo());
        return 0;
      default:
        throw new Error(`Unknown command \"${command}\". Run 742cli --help for usage.`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown CLI error";
    console.error(`742cli error: ${message}`);
    return 1;
  }
}

const exitCode = main(process.argv.slice(2));

if (exitCode !== 0) {
  process.exit(exitCode);
}
