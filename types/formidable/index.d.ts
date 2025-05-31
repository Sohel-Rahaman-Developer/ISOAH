// types/formidable/index.d.ts

import type { IncomingMessage } from "http";

/** A single uploaded file’s metadata and temporary filepath */
export interface File {
  /** The temporary filepath on disk where Formidable saved the file */
  filepath: string;
  /** Original filename sent by the client (e.g., "image.png") */
  originalFilename: string;
  /** The MIME type, e.g., "image/png" */
  mimetype: string;
  /** File size in bytes */
  size: number;
}

/** A dictionary of all non‐file form fields, e.g. { title: "Hello", categoryId: "..." } */
export interface Fields {
  [field: string]: string | string[] | undefined;
}

/** Options you can pass to `new IncomingForm(opts)` */
export interface Options {
  multiples?: boolean;      // Allow multiple files per field
  keepExtensions?: boolean; // Keep file extensions on uploaded temp files
  maxFileSize?: number;     // Maximum file size in bytes
  // (Add more options from Formidable’s documentation as needed)
}

/**
 * The Formidable parser class.
 * You construct it with optional `Options`, then call `.parse(req, callback)`.
 */
export class IncomingForm {
  constructor(opts?: Options);

  /**
   * Parse the Node.js IncomingMessage `req`, then invoke `callback` with:
   *   - err: any parsing or file‐handling error  
   *   - fields: a `Fields` object of all text fields  
   *   - files: a Record<string, File | File[]> of all uploaded files
   */
  parse(
    req: IncomingMessage,
    callback: (err: any, fields: Fields, files: Record<string, File | File[]>) => void
  ): void;
}
