export default function throttle<T extends (...args: any[]) => void>(fn: T, wait: number) {
  let last = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let pending: any[] | null = null;

  return (...args: any[]) => {
    const now = Date.now();
    const remaining = wait - (now - last);
    pending = args;

    const later = () => {
      last = Date.now();
      timeout = null;
      if (pending) {
        fn(...pending);
        pending = null;
      }
    };

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      last = now;
      if (pending) {
        fn(...pending);
        pending = null;
      }
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
}
