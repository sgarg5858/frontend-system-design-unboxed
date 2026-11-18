import { Type } from '@angular/core';

/**
 * Named interactive widgets that JSON content can reference with
 *   { "type": "widget", "name": "<key>", "props": { ... } }
 * Each entry loads its file on demand, so a chapter only downloads the widgets it uses.
 * Use a widget only when the interaction needs real logic; prefer generic blocks otherwise.
 * A widget that takes props declares `readonly props = input<...>()`.
 */
export const WIDGETS: Record<string, () => Promise<Type<unknown>>> = {
  'coming-soon': () => import('./soon.widgets').then((m) => m.ComingSoonWidget),
};

const loaded = new Map<string, Type<unknown>>();

/** Fetch a widget's code (once) and remember it so later renders are synchronous. */
export function loadWidget(name: string): Promise<Type<unknown> | undefined> {
  const hit = loaded.get(name);
  if (hit) return Promise.resolve(hit);
  const load = WIDGETS[name];
  if (!load) return Promise.resolve(undefined);
  return load().then((type) => {
    loaded.set(name, type);
    return type;
  });
}

/** A widget that has already been fetched, or undefined. */
export const loadedWidget = (name: string) => loaded.get(name);
