const throttle = <T extends (...args: any[]) => void>(fn: T, ms: number): T => {
  // TODO: throttle
  return ((...args: any[]) => {}) as T;
};

export default throttle;
