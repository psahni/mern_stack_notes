#### useTransition
You can lower the prirority of state update
const [startTransition, isPending] = useTransition({ timeoutMs: 3000 });

The useTransition hook when invoked returns two values: startTransition and isPending, both are important for managing state updates. The function startTransition marks the state update as an "update that can wait" or low priority.

