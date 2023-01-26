setTimeout(() => {
  throw new Error('oops');
}, 1);

// process is built into Node, is an object in JS that represents the current process you're in: the file system, variables, current file, secrets, metadata, hardware, capabilities of hardware, IP address, etc.
// process.on('uncaughtException', () => {});

// process.on('unhandledRejection', () => {});
