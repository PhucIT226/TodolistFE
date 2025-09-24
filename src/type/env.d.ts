interface ProcessEnv {
  readonly REACT_APP_API_URL: string;
}

interface Process {
  readonly env: ProcessEnv;
}

declare const process: Process;
