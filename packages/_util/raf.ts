export const rAF = (fn: () => void) => window.requestAnimationFrame(fn)

export const cAF = (handle: number) => window.cancelAnimationFrame(handle)
