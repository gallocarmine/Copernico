/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(onboarding)/onboarding` | `/(protected)` | `/(protected)/(onboarding)/onboarding` | `/(protected)/(tabs)` | `/(protected)/(tabs)/chat` | `/(protected)/(tabs)/home` | `/(protected)/(tabs)/profile` | `/(protected)/(tabs)/stats` | `/(protected)/chat` | `/(protected)/home` | `/(protected)/onboarding` | `/(protected)/profile` | `/(protected)/stats` | `/(public)` | `/(public)/sign-in` | `/(public)/sign-up` | `/(public)/welcome` | `/(tabs)` | `/(tabs)/chat` | `/(tabs)/home` | `/(tabs)/profile` | `/(tabs)/stats` | `/_header` | `/_sitemap` | `/chat` | `/home` | `/onboarding` | `/profile` | `/sign-in` | `/sign-up` | `/stats` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
