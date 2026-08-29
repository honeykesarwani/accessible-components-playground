# NOTES.md

## What shadcn/ui handled that I missed

### Modal / Dialog

1. **Portal rendering** — shadcn's Dialog renders its content via a React Portal directly into `document.body`, avoiding potential clipping/z-index issues if the modal is nested inside a container with `overflow: hidden` or a low stacking context. My Modal renders inline in the DOM wherever the component is placed, which works for my test case but could break in a more complex page layout.

2. **Enforced accessible naming** — shadcn's `DialogTitle` is a required, dedicated component, and Radix will warn in the console during development if a dialog is missing an accessible name. My Modal just took a `title` prop and manually wired it to `aria-labelledby` — nothing stops me from forgetting this wiring on a future component, since there's no built-in safeguard.

3. **Icon-only close button includes hidden screen-reader text** (`<span className="sr-only">Close</span>` next to the X icon) — a detail I hadn't considered. My close button used visible text ("Close"), so I sidestepped this problem rather than solving it. If I ever switch to an icon-only close button, I need to remember this pattern.

4. **More robust focus trap** — my focus trap recalculates the list of focusable elements once, using `querySelectorAll`. Radix's underlying `FocusScope` handles cases where the set of focusable elements changes while the dialog is open (e.g., conditional fields appearing), which my simpler implementation doesn't account for.

### Tabs

5. **Vertical orientation support** — Radix's Tabs supports both horizontal and vertical tab lists, correctly switching between Left/Right and Up/Down arrow key behavior. My implementation only supports horizontal tabs; adding vertical support would require additional keyboard logic I hadn't written.

6. **Disabled tab handling** — shadcn's tab triggers support a disabled state, with arrow key navigation correctly skipping disabled tabs. My Tabs component has no concept of disabling a tab — if a tab were marked disabled in my version, Arrow keys would still land on it and let a user "select" it, which is a real accessibility bug in my implementation.

## Where my implementation matched shadcn's approach

- Both use `:focus-visible` to show focus rings only for keyboard navigation, not mouse clicks
- Both correctly restrict Tab-key navigation to only the active tab (via `tabIndex={-1}` on inactive tabs), letting Arrow keys move between tabs instead

## Reflection

Building these components by hand first made it much easier to actually read and understand shadcn's source, since I recognized the underlying patterns (roving tabindex, ARIA roles, focus management) even though shadcn's implementation is layered with more edge-case handling, styling variants, and safeguards than I wrote. The biggest gap between my components and shadcn's isn't the *core* accessibility pattern — I got Tab/Arrow key behavior, roles, and focus trapping working correctly — it's the edge cases: disabled states, dynamic content changes, and developer safeguards (like the missing-title warning) that shadcn handles and I didn't even think to add.