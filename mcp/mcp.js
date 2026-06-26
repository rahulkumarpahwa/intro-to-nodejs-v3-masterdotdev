#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

import {
  createNote,
  getAllNotes,
  findNotes,
  removeNote,
  cleanNotes,
} from "./notes.js";

const server = new Server(
  {
    name: "notes-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "create_note",
      description: "Create a new note",
      inputSchema: {
        type: "object",
        properties: {
          content: {
            type: "string",
          },
          tags: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
        required: ["content"],
      },
    },
    {
      name: "list_notes",
      description: "List all notes",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
    {
      name: "find_notes",
      description: "Search notes by content",
      inputSchema: {
        type: "object",
        properties: {
          filter: {
            type: "string",
          },
        },
        required: ["filter"],
      },
    },
    {
      name: "remove_note",
      description: "Remove a note by id",
      inputSchema: {
        type: "object",
        properties: {
          id: {
            type: "number",
          },
        },
        required: ["id"],
      },
    },
    {
      name: "clean_notes",
      description: "Delete every note",
      inputSchema: {
        type: "object",
        properties: {},
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "create_note": {
      const schema = z.object({
        content: z.string(),
        tags: z.array(z.string()).optional(),
      });

      const input = schema.parse(args);

      const note = await createNote(input);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(note, null, 2),
          },
        ],
      };
    }

    case "list_notes": {
      const notes = await getAllNotes();

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(notes, null, 2),
          },
        ],
      };
    }

    case "find_notes": {
      const schema = z.object({
        filter: z.string(),
      });

      const input = schema.parse(args);

      const notes = await findNotes(input.filter);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(notes, null, 2),
          },
        ],
      };
    }

    case "remove_note": {
      const schema = z.object({
        id: z.number(),
      });

      const input = schema.parse(args);

      const removed = await removeNote(input.id);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(removed, null, 2),
          },
        ],
      };
    }

    case "clean_notes": {
      await cleanNotes();

      return {
        content: [
          {
            type: "text",
            text: "All notes removed.",
          },
        ],
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);