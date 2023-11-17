import { cacheExchange } from '@urql/exchange-graphcache';
import { IntrospectionQuery } from 'graphql';

interface PartialIntrospectionSchema {
  queryType: {
    name: string;
    kind?: unknown;
  };
  mutationType?: {
    name: string;
    kind?: unknown;
  } | null;
  subscriptionType?: {
    name: string;
    kind?: unknown;
  } | null;
  types?: readonly unknown[];
}
type IntrospectionData =
  | IntrospectionQuery
  | {
      __schema: PartialIntrospectionSchema;
    };

export function createGraphCache({
  schema,
  customKeys,
  customGetProxy,
  resolvers,
}: {
  schema: IntrospectionData;
  customKeys?: object;
  customGetProxy?: (target: object, properties: string) => undefined | string | (() => null);
  resolvers?: object;
}) {
  return cacheExchange({
    schema,
    keys: new Proxy(
      {
        // Unique keys go here
        Meta: () => null,
        Asset: () => null,
        TableRow: () => null,
        TableColumnSimple: () => null,
        TableColumnAsset: () => null,
        Text: () => null,
        HeroSlideEntity: () => null,
        HeroSlideServices: () => null,
        ...customKeys,
      },
      {
        get(target, properties) {
          const prop = properties.toString();

          // Recurring keys that can be pattern matched go here
          const custom = customGetProxy?.(target, prop);
          if (custom) return custom;

          if (prop.includes('Paginator')) return () => null;
          if (prop.includes('Pagination')) return () => null;
          if (prop.startsWith('ContentElement')) return () => null;
          if (prop.startsWith('PageContentElement')) return () => null;

          return target[properties as keyof typeof target];
        },
      },
    ),
    resolvers: {
      ...resolvers,
    },
  });
}
