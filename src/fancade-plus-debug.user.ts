import("./fancade-plus.user").catch((err) => alert(formatError(err)));

function formatError(error: unknown) {
  if (error instanceof Error) {
    return error.stack ?? `${error.name}: ${error.message}`;
  }
  return error;
}
