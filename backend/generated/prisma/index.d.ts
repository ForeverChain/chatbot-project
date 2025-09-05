
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chatbot
 * 
 */
export type Chatbot = $Result.DefaultSelection<Prisma.$ChatbotPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Integration
 * 
 */
export type Integration = $Result.DefaultSelection<Prisma.$IntegrationPayload>
/**
 * Model MessageTemplate
 * 
 */
export type MessageTemplate = $Result.DefaultSelection<Prisma.$MessageTemplatePayload>
/**
 * Model ChatbotCustomization
 * 
 */
export type ChatbotCustomization = $Result.DefaultSelection<Prisma.$ChatbotCustomizationPayload>
/**
 * Model Flow
 * 
 */
export type Flow = $Result.DefaultSelection<Prisma.$FlowPayload>
/**
 * Model Analytics
 * 
 */
export type Analytics = $Result.DefaultSelection<Prisma.$AnalyticsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatbot`: Exposes CRUD operations for the **Chatbot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatbots
    * const chatbots = await prisma.chatbot.findMany()
    * ```
    */
  get chatbot(): Prisma.ChatbotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integration`: Exposes CRUD operations for the **Integration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Integrations
    * const integrations = await prisma.integration.findMany()
    * ```
    */
  get integration(): Prisma.IntegrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageTemplate`: Exposes CRUD operations for the **MessageTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageTemplates
    * const messageTemplates = await prisma.messageTemplate.findMany()
    * ```
    */
  get messageTemplate(): Prisma.MessageTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatbotCustomization`: Exposes CRUD operations for the **ChatbotCustomization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatbotCustomizations
    * const chatbotCustomizations = await prisma.chatbotCustomization.findMany()
    * ```
    */
  get chatbotCustomization(): Prisma.ChatbotCustomizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flow`: Exposes CRUD operations for the **Flow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flows
    * const flows = await prisma.flow.findMany()
    * ```
    */
  get flow(): Prisma.FlowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analytics
    * const analytics = await prisma.analytics.findMany()
    * ```
    */
  get analytics(): Prisma.AnalyticsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Chatbot: 'Chatbot',
    Conversation: 'Conversation',
    Message: 'Message',
    Integration: 'Integration',
    MessageTemplate: 'MessageTemplate',
    ChatbotCustomization: 'ChatbotCustomization',
    Flow: 'Flow',
    Analytics: 'Analytics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chatbot" | "conversation" | "message" | "integration" | "messageTemplate" | "chatbotCustomization" | "flow" | "analytics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Chatbot: {
        payload: Prisma.$ChatbotPayload<ExtArgs>
        fields: Prisma.ChatbotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatbotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatbotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          findFirst: {
            args: Prisma.ChatbotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatbotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          findMany: {
            args: Prisma.ChatbotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>[]
          }
          create: {
            args: Prisma.ChatbotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          createMany: {
            args: Prisma.ChatbotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatbotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          update: {
            args: Prisma.ChatbotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          deleteMany: {
            args: Prisma.ChatbotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatbotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatbotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotPayload>
          }
          aggregate: {
            args: Prisma.ChatbotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatbot>
          }
          groupBy: {
            args: Prisma.ChatbotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatbotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatbotCountArgs<ExtArgs>
            result: $Utils.Optional<ChatbotCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Integration: {
        payload: Prisma.$IntegrationPayload<ExtArgs>
        fields: Prisma.IntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          findFirst: {
            args: Prisma.IntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          findMany: {
            args: Prisma.IntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          create: {
            args: Prisma.IntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          createMany: {
            args: Prisma.IntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          update: {
            args: Prisma.IntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          aggregate: {
            args: Prisma.IntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegration>
          }
          groupBy: {
            args: Prisma.IntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationCountAggregateOutputType> | number
          }
        }
      }
      MessageTemplate: {
        payload: Prisma.$MessageTemplatePayload<ExtArgs>
        fields: Prisma.MessageTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          findFirst: {
            args: Prisma.MessageTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          findMany: {
            args: Prisma.MessageTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>[]
          }
          create: {
            args: Prisma.MessageTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          createMany: {
            args: Prisma.MessageTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          update: {
            args: Prisma.MessageTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          deleteMany: {
            args: Prisma.MessageTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageTemplatePayload>
          }
          aggregate: {
            args: Prisma.MessageTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageTemplate>
          }
          groupBy: {
            args: Prisma.MessageTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<MessageTemplateCountAggregateOutputType> | number
          }
        }
      }
      ChatbotCustomization: {
        payload: Prisma.$ChatbotCustomizationPayload<ExtArgs>
        fields: Prisma.ChatbotCustomizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatbotCustomizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotCustomizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatbotCustomizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotCustomizationPayload>
          }
          findFirst: {
            args: Prisma.ChatbotCustomizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotCustomizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatbotCustomizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotCustomizationPayload>
          }
          findMany: {
            args: Prisma.ChatbotCustomizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotCustomizationPayload>[]
          }
          create: {
            args: Prisma.ChatbotCustomizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotCustomizationPayload>
          }
          createMany: {
            args: Prisma.ChatbotCustomizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatbotCustomizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotCustomizationPayload>
          }
          update: {
            args: Prisma.ChatbotCustomizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotCustomizationPayload>
          }
          deleteMany: {
            args: Prisma.ChatbotCustomizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatbotCustomizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatbotCustomizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotCustomizationPayload>
          }
          aggregate: {
            args: Prisma.ChatbotCustomizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatbotCustomization>
          }
          groupBy: {
            args: Prisma.ChatbotCustomizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatbotCustomizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatbotCustomizationCountArgs<ExtArgs>
            result: $Utils.Optional<ChatbotCustomizationCountAggregateOutputType> | number
          }
        }
      }
      Flow: {
        payload: Prisma.$FlowPayload<ExtArgs>
        fields: Prisma.FlowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          findFirst: {
            args: Prisma.FlowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          findMany: {
            args: Prisma.FlowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>[]
          }
          create: {
            args: Prisma.FlowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          createMany: {
            args: Prisma.FlowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          update: {
            args: Prisma.FlowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          deleteMany: {
            args: Prisma.FlowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          aggregate: {
            args: Prisma.FlowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlow>
          }
          groupBy: {
            args: Prisma.FlowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowCountArgs<ExtArgs>
            result: $Utils.Optional<FlowCountAggregateOutputType> | number
          }
        }
      }
      Analytics: {
        payload: Prisma.$AnalyticsPayload<ExtArgs>
        fields: Prisma.AnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findMany: {
            args: Prisma.AnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          create: {
            args: Prisma.AnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          createMany: {
            args: Prisma.AnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          update: {
            args: Prisma.AnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalytics>
          }
          groupBy: {
            args: Prisma.AnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chatbot?: ChatbotOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    integration?: IntegrationOmit
    messageTemplate?: MessageTemplateOmit
    chatbotCustomization?: ChatbotCustomizationOmit
    flow?: FlowOmit
    analytics?: AnalyticsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chatbots: number
    integrations: number
    analytics: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatbots?: boolean | UserCountOutputTypeCountChatbotsArgs
    integrations?: boolean | UserCountOutputTypeCountIntegrationsArgs
    analytics?: boolean | UserCountOutputTypeCountAnalyticsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatbotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatbotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
  }


  /**
   * Count Type ChatbotCountOutputType
   */

  export type ChatbotCountOutputType = {
    conversations: number
    integrations: number
    templates: number
    flows: number
    analytics: number
  }

  export type ChatbotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | ChatbotCountOutputTypeCountConversationsArgs
    integrations?: boolean | ChatbotCountOutputTypeCountIntegrationsArgs
    templates?: boolean | ChatbotCountOutputTypeCountTemplatesArgs
    flows?: boolean | ChatbotCountOutputTypeCountFlowsArgs
    analytics?: boolean | ChatbotCountOutputTypeCountAnalyticsArgs
  }

  // Custom InputTypes
  /**
   * ChatbotCountOutputType without action
   */
  export type ChatbotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCountOutputType
     */
    select?: ChatbotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatbotCountOutputType without action
   */
  export type ChatbotCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * ChatbotCountOutputType without action
   */
  export type ChatbotCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
  }

  /**
   * ChatbotCountOutputType without action
   */
  export type ChatbotCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageTemplateWhereInput
  }

  /**
   * ChatbotCountOutputType without action
   */
  export type ChatbotCountOutputTypeCountFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowWhereInput
  }

  /**
   * ChatbotCountOutputType without action
   */
  export type ChatbotCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatbots?: boolean | User$chatbotsArgs<ExtArgs>
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    analytics?: boolean | User$analyticsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatbots?: boolean | User$chatbotsArgs<ExtArgs>
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    analytics?: boolean | User$analyticsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chatbots: Prisma.$ChatbotPayload<ExtArgs>[]
      integrations: Prisma.$IntegrationPayload<ExtArgs>[]
      analytics: Prisma.$AnalyticsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatbots<T extends User$chatbotsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatbotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    integrations<T extends User$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analytics<T extends User$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, User$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.chatbots
   */
  export type User$chatbotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    where?: ChatbotWhereInput
    orderBy?: ChatbotOrderByWithRelationInput | ChatbotOrderByWithRelationInput[]
    cursor?: ChatbotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatbotScalarFieldEnum | ChatbotScalarFieldEnum[]
  }

  /**
   * User.integrations
   */
  export type User$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    cursor?: IntegrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * User.analytics
   */
  export type User$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    cursor?: AnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Chatbot
   */

  export type AggregateChatbot = {
    _count: ChatbotCountAggregateOutputType | null
    _avg: ChatbotAvgAggregateOutputType | null
    _sum: ChatbotSumAggregateOutputType | null
    _min: ChatbotMinAggregateOutputType | null
    _max: ChatbotMaxAggregateOutputType | null
  }

  export type ChatbotAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ChatbotSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ChatbotMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatbotMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatbotCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatbotAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ChatbotSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ChatbotMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatbotMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatbotCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatbotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatbot to aggregate.
     */
    where?: ChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbots to fetch.
     */
    orderBy?: ChatbotOrderByWithRelationInput | ChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chatbots
    **/
    _count?: true | ChatbotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatbotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatbotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatbotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatbotMaxAggregateInputType
  }

  export type GetChatbotAggregateType<T extends ChatbotAggregateArgs> = {
        [P in keyof T & keyof AggregateChatbot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatbot[P]>
      : GetScalarType<T[P], AggregateChatbot[P]>
  }




  export type ChatbotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatbotWhereInput
    orderBy?: ChatbotOrderByWithAggregationInput | ChatbotOrderByWithAggregationInput[]
    by: ChatbotScalarFieldEnum[] | ChatbotScalarFieldEnum
    having?: ChatbotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatbotCountAggregateInputType | true
    _avg?: ChatbotAvgAggregateInputType
    _sum?: ChatbotSumAggregateInputType
    _min?: ChatbotMinAggregateInputType
    _max?: ChatbotMaxAggregateInputType
  }

  export type ChatbotGroupByOutputType = {
    id: number
    name: string
    description: string | null
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: ChatbotCountAggregateOutputType | null
    _avg: ChatbotAvgAggregateOutputType | null
    _sum: ChatbotSumAggregateOutputType | null
    _min: ChatbotMinAggregateOutputType | null
    _max: ChatbotMaxAggregateOutputType | null
  }

  type GetChatbotGroupByPayload<T extends ChatbotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatbotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatbotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatbotGroupByOutputType[P]>
            : GetScalarType<T[P], ChatbotGroupByOutputType[P]>
        }
      >
    >


  export type ChatbotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    conversations?: boolean | Chatbot$conversationsArgs<ExtArgs>
    integrations?: boolean | Chatbot$integrationsArgs<ExtArgs>
    templates?: boolean | Chatbot$templatesArgs<ExtArgs>
    customization?: boolean | Chatbot$customizationArgs<ExtArgs>
    flows?: boolean | Chatbot$flowsArgs<ExtArgs>
    analytics?: boolean | Chatbot$analyticsArgs<ExtArgs>
    _count?: boolean | ChatbotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatbot"]>



  export type ChatbotSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatbotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["chatbot"]>
  export type ChatbotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    conversations?: boolean | Chatbot$conversationsArgs<ExtArgs>
    integrations?: boolean | Chatbot$integrationsArgs<ExtArgs>
    templates?: boolean | Chatbot$templatesArgs<ExtArgs>
    customization?: boolean | Chatbot$customizationArgs<ExtArgs>
    flows?: boolean | Chatbot$flowsArgs<ExtArgs>
    analytics?: boolean | Chatbot$analyticsArgs<ExtArgs>
    _count?: boolean | ChatbotCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChatbotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chatbot"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      integrations: Prisma.$IntegrationPayload<ExtArgs>[]
      templates: Prisma.$MessageTemplatePayload<ExtArgs>[]
      customization: Prisma.$ChatbotCustomizationPayload<ExtArgs> | null
      flows: Prisma.$FlowPayload<ExtArgs>[]
      analytics: Prisma.$AnalyticsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatbot"]>
    composites: {}
  }

  type ChatbotGetPayload<S extends boolean | null | undefined | ChatbotDefaultArgs> = $Result.GetResult<Prisma.$ChatbotPayload, S>

  type ChatbotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatbotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatbotCountAggregateInputType | true
    }

  export interface ChatbotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chatbot'], meta: { name: 'Chatbot' } }
    /**
     * Find zero or one Chatbot that matches the filter.
     * @param {ChatbotFindUniqueArgs} args - Arguments to find a Chatbot
     * @example
     * // Get one Chatbot
     * const chatbot = await prisma.chatbot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatbotFindUniqueArgs>(args: SelectSubset<T, ChatbotFindUniqueArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatbot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatbotFindUniqueOrThrowArgs} args - Arguments to find a Chatbot
     * @example
     * // Get one Chatbot
     * const chatbot = await prisma.chatbot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatbotFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatbotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatbot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotFindFirstArgs} args - Arguments to find a Chatbot
     * @example
     * // Get one Chatbot
     * const chatbot = await prisma.chatbot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatbotFindFirstArgs>(args?: SelectSubset<T, ChatbotFindFirstArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatbot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotFindFirstOrThrowArgs} args - Arguments to find a Chatbot
     * @example
     * // Get one Chatbot
     * const chatbot = await prisma.chatbot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatbotFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatbotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatbots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatbots
     * const chatbots = await prisma.chatbot.findMany()
     * 
     * // Get first 10 Chatbots
     * const chatbots = await prisma.chatbot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatbotWithIdOnly = await prisma.chatbot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatbotFindManyArgs>(args?: SelectSubset<T, ChatbotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatbot.
     * @param {ChatbotCreateArgs} args - Arguments to create a Chatbot.
     * @example
     * // Create one Chatbot
     * const Chatbot = await prisma.chatbot.create({
     *   data: {
     *     // ... data to create a Chatbot
     *   }
     * })
     * 
     */
    create<T extends ChatbotCreateArgs>(args: SelectSubset<T, ChatbotCreateArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatbots.
     * @param {ChatbotCreateManyArgs} args - Arguments to create many Chatbots.
     * @example
     * // Create many Chatbots
     * const chatbot = await prisma.chatbot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatbotCreateManyArgs>(args?: SelectSubset<T, ChatbotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chatbot.
     * @param {ChatbotDeleteArgs} args - Arguments to delete one Chatbot.
     * @example
     * // Delete one Chatbot
     * const Chatbot = await prisma.chatbot.delete({
     *   where: {
     *     // ... filter to delete one Chatbot
     *   }
     * })
     * 
     */
    delete<T extends ChatbotDeleteArgs>(args: SelectSubset<T, ChatbotDeleteArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatbot.
     * @param {ChatbotUpdateArgs} args - Arguments to update one Chatbot.
     * @example
     * // Update one Chatbot
     * const chatbot = await prisma.chatbot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatbotUpdateArgs>(args: SelectSubset<T, ChatbotUpdateArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatbots.
     * @param {ChatbotDeleteManyArgs} args - Arguments to filter Chatbots to delete.
     * @example
     * // Delete a few Chatbots
     * const { count } = await prisma.chatbot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatbotDeleteManyArgs>(args?: SelectSubset<T, ChatbotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatbots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatbots
     * const chatbot = await prisma.chatbot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatbotUpdateManyArgs>(args: SelectSubset<T, ChatbotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chatbot.
     * @param {ChatbotUpsertArgs} args - Arguments to update or create a Chatbot.
     * @example
     * // Update or create a Chatbot
     * const chatbot = await prisma.chatbot.upsert({
     *   create: {
     *     // ... data to create a Chatbot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatbot we want to update
     *   }
     * })
     */
    upsert<T extends ChatbotUpsertArgs>(args: SelectSubset<T, ChatbotUpsertArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatbots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotCountArgs} args - Arguments to filter Chatbots to count.
     * @example
     * // Count the number of Chatbots
     * const count = await prisma.chatbot.count({
     *   where: {
     *     // ... the filter for the Chatbots we want to count
     *   }
     * })
    **/
    count<T extends ChatbotCountArgs>(
      args?: Subset<T, ChatbotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatbotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatbot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatbotAggregateArgs>(args: Subset<T, ChatbotAggregateArgs>): Prisma.PrismaPromise<GetChatbotAggregateType<T>>

    /**
     * Group by Chatbot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatbotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatbotGroupByArgs['orderBy'] }
        : { orderBy?: ChatbotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatbotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatbotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chatbot model
   */
  readonly fields: ChatbotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chatbot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatbotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversations<T extends Chatbot$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Chatbot$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    integrations<T extends Chatbot$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, Chatbot$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends Chatbot$templatesArgs<ExtArgs> = {}>(args?: Subset<T, Chatbot$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customization<T extends Chatbot$customizationArgs<ExtArgs> = {}>(args?: Subset<T, Chatbot$customizationArgs<ExtArgs>>): Prisma__ChatbotCustomizationClient<$Result.GetResult<Prisma.$ChatbotCustomizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    flows<T extends Chatbot$flowsArgs<ExtArgs> = {}>(args?: Subset<T, Chatbot$flowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analytics<T extends Chatbot$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, Chatbot$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chatbot model
   */
  interface ChatbotFieldRefs {
    readonly id: FieldRef<"Chatbot", 'Int'>
    readonly name: FieldRef<"Chatbot", 'String'>
    readonly description: FieldRef<"Chatbot", 'String'>
    readonly userId: FieldRef<"Chatbot", 'Int'>
    readonly createdAt: FieldRef<"Chatbot", 'DateTime'>
    readonly updatedAt: FieldRef<"Chatbot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chatbot findUnique
   */
  export type ChatbotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot to fetch.
     */
    where: ChatbotWhereUniqueInput
  }

  /**
   * Chatbot findUniqueOrThrow
   */
  export type ChatbotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot to fetch.
     */
    where: ChatbotWhereUniqueInput
  }

  /**
   * Chatbot findFirst
   */
  export type ChatbotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot to fetch.
     */
    where?: ChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbots to fetch.
     */
    orderBy?: ChatbotOrderByWithRelationInput | ChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatbots.
     */
    cursor?: ChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatbots.
     */
    distinct?: ChatbotScalarFieldEnum | ChatbotScalarFieldEnum[]
  }

  /**
   * Chatbot findFirstOrThrow
   */
  export type ChatbotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot to fetch.
     */
    where?: ChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbots to fetch.
     */
    orderBy?: ChatbotOrderByWithRelationInput | ChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatbots.
     */
    cursor?: ChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatbots.
     */
    distinct?: ChatbotScalarFieldEnum | ChatbotScalarFieldEnum[]
  }

  /**
   * Chatbot findMany
   */
  export type ChatbotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter, which Chatbots to fetch.
     */
    where?: ChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbots to fetch.
     */
    orderBy?: ChatbotOrderByWithRelationInput | ChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chatbots.
     */
    cursor?: ChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbots.
     */
    skip?: number
    distinct?: ChatbotScalarFieldEnum | ChatbotScalarFieldEnum[]
  }

  /**
   * Chatbot create
   */
  export type ChatbotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * The data needed to create a Chatbot.
     */
    data: XOR<ChatbotCreateInput, ChatbotUncheckedCreateInput>
  }

  /**
   * Chatbot createMany
   */
  export type ChatbotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chatbots.
     */
    data: ChatbotCreateManyInput | ChatbotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chatbot update
   */
  export type ChatbotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * The data needed to update a Chatbot.
     */
    data: XOR<ChatbotUpdateInput, ChatbotUncheckedUpdateInput>
    /**
     * Choose, which Chatbot to update.
     */
    where: ChatbotWhereUniqueInput
  }

  /**
   * Chatbot updateMany
   */
  export type ChatbotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chatbots.
     */
    data: XOR<ChatbotUpdateManyMutationInput, ChatbotUncheckedUpdateManyInput>
    /**
     * Filter which Chatbots to update
     */
    where?: ChatbotWhereInput
    /**
     * Limit how many Chatbots to update.
     */
    limit?: number
  }

  /**
   * Chatbot upsert
   */
  export type ChatbotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * The filter to search for the Chatbot to update in case it exists.
     */
    where: ChatbotWhereUniqueInput
    /**
     * In case the Chatbot found by the `where` argument doesn't exist, create a new Chatbot with this data.
     */
    create: XOR<ChatbotCreateInput, ChatbotUncheckedCreateInput>
    /**
     * In case the Chatbot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatbotUpdateInput, ChatbotUncheckedUpdateInput>
  }

  /**
   * Chatbot delete
   */
  export type ChatbotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    /**
     * Filter which Chatbot to delete.
     */
    where: ChatbotWhereUniqueInput
  }

  /**
   * Chatbot deleteMany
   */
  export type ChatbotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatbots to delete
     */
    where?: ChatbotWhereInput
    /**
     * Limit how many Chatbots to delete.
     */
    limit?: number
  }

  /**
   * Chatbot.conversations
   */
  export type Chatbot$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Chatbot.integrations
   */
  export type Chatbot$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    cursor?: IntegrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Chatbot.templates
   */
  export type Chatbot$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    where?: MessageTemplateWhereInput
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    cursor?: MessageTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * Chatbot.customization
   */
  export type Chatbot$customizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
    where?: ChatbotCustomizationWhereInput
  }

  /**
   * Chatbot.flows
   */
  export type Chatbot$flowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    where?: FlowWhereInput
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    cursor?: FlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowScalarFieldEnum | FlowScalarFieldEnum[]
  }

  /**
   * Chatbot.analytics
   */
  export type Chatbot$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    cursor?: AnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Chatbot without action
   */
  export type ChatbotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    id: number | null
    chatbotId: number | null
  }

  export type ConversationSumAggregateOutputType = {
    id: number | null
    chatbotId: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    chatbotId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    id?: true
    chatbotId?: true
  }

  export type ConversationSumAggregateInputType = {
    id?: true
    chatbotId?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    chatbotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    chatbotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    chatbotId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: number
    chatbotId: number
    createdAt: Date
    updatedAt: Date
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatbotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatbot?: boolean | ChatbotDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>



  export type ConversationSelectScalar = {
    id?: boolean
    chatbotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatbotId" | "createdAt" | "updatedAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatbot?: boolean | ChatbotDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      chatbot: Prisma.$ChatbotPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatbotId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatbot<T extends ChatbotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatbotDefaultArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'Int'>
    readonly chatbotId: FieldRef<"Conversation", 'Int'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    conversationId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    conversationId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    conversationId: number | null
    content: string | null
    sender: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    conversationId: number | null
    content: string | null
    sender: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversationId: number
    content: number
    sender: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    conversationId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    conversationId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    content?: true
    sender?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    content?: true
    sender?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    content?: true
    sender?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    conversationId: number
    content: string
    sender: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    content?: boolean
    sender?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    content?: boolean
    sender?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "content" | "sender" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conversationId: number
      content: string
      sender: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly conversationId: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly sender: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Integration
   */

  export type AggregateIntegration = {
    _count: IntegrationCountAggregateOutputType | null
    _avg: IntegrationAvgAggregateOutputType | null
    _sum: IntegrationSumAggregateOutputType | null
    _min: IntegrationMinAggregateOutputType | null
    _max: IntegrationMaxAggregateOutputType | null
  }

  export type IntegrationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    chatbotId: number | null
  }

  export type IntegrationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    chatbotId: number | null
  }

  export type IntegrationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    token: string | null
    config: string | null
    createdAt: Date | null
    updatedAt: Date | null
    chatbotId: number | null
  }

  export type IntegrationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: string | null
    token: string | null
    config: string | null
    createdAt: Date | null
    updatedAt: Date | null
    chatbotId: number | null
  }

  export type IntegrationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    token: number
    config: number
    createdAt: number
    updatedAt: number
    chatbotId: number
    _all: number
  }


  export type IntegrationAvgAggregateInputType = {
    id?: true
    userId?: true
    chatbotId?: true
  }

  export type IntegrationSumAggregateInputType = {
    id?: true
    userId?: true
    chatbotId?: true
  }

  export type IntegrationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    token?: true
    config?: true
    createdAt?: true
    updatedAt?: true
    chatbotId?: true
  }

  export type IntegrationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    token?: true
    config?: true
    createdAt?: true
    updatedAt?: true
    chatbotId?: true
  }

  export type IntegrationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    token?: true
    config?: true
    createdAt?: true
    updatedAt?: true
    chatbotId?: true
    _all?: true
  }

  export type IntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integration to aggregate.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Integrations
    **/
    _count?: true | IntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntegrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntegrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationMaxAggregateInputType
  }

  export type GetIntegrationAggregateType<T extends IntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegration[P]>
      : GetScalarType<T[P], AggregateIntegration[P]>
  }




  export type IntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithAggregationInput | IntegrationOrderByWithAggregationInput[]
    by: IntegrationScalarFieldEnum[] | IntegrationScalarFieldEnum
    having?: IntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationCountAggregateInputType | true
    _avg?: IntegrationAvgAggregateInputType
    _sum?: IntegrationSumAggregateInputType
    _min?: IntegrationMinAggregateInputType
    _max?: IntegrationMaxAggregateInputType
  }

  export type IntegrationGroupByOutputType = {
    id: number
    userId: number
    type: string
    token: string | null
    config: string | null
    createdAt: Date
    updatedAt: Date
    chatbotId: number | null
    _count: IntegrationCountAggregateOutputType | null
    _avg: IntegrationAvgAggregateOutputType | null
    _sum: IntegrationSumAggregateOutputType | null
    _min: IntegrationMinAggregateOutputType | null
    _max: IntegrationMaxAggregateOutputType | null
  }

  type GetIntegrationGroupByPayload<T extends IntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    token?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatbotId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatbot?: boolean | Integration$chatbotArgs<ExtArgs>
  }, ExtArgs["result"]["integration"]>



  export type IntegrationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    token?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatbotId?: boolean
  }

  export type IntegrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "token" | "config" | "createdAt" | "updatedAt" | "chatbotId", ExtArgs["result"]["integration"]>
  export type IntegrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatbot?: boolean | Integration$chatbotArgs<ExtArgs>
  }

  export type $IntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Integration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chatbot: Prisma.$ChatbotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: string
      token: string | null
      config: string | null
      createdAt: Date
      updatedAt: Date
      chatbotId: number | null
    }, ExtArgs["result"]["integration"]>
    composites: {}
  }

  type IntegrationGetPayload<S extends boolean | null | undefined | IntegrationDefaultArgs> = $Result.GetResult<Prisma.$IntegrationPayload, S>

  type IntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationCountAggregateInputType | true
    }

  export interface IntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Integration'], meta: { name: 'Integration' } }
    /**
     * Find zero or one Integration that matches the filter.
     * @param {IntegrationFindUniqueArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationFindUniqueArgs>(args: SelectSubset<T, IntegrationFindUniqueArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Integration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationFindUniqueOrThrowArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindFirstArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationFindFirstArgs>(args?: SelectSubset<T, IntegrationFindFirstArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindFirstOrThrowArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Integrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integrations
     * const integrations = await prisma.integration.findMany()
     * 
     * // Get first 10 Integrations
     * const integrations = await prisma.integration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationWithIdOnly = await prisma.integration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationFindManyArgs>(args?: SelectSubset<T, IntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Integration.
     * @param {IntegrationCreateArgs} args - Arguments to create a Integration.
     * @example
     * // Create one Integration
     * const Integration = await prisma.integration.create({
     *   data: {
     *     // ... data to create a Integration
     *   }
     * })
     * 
     */
    create<T extends IntegrationCreateArgs>(args: SelectSubset<T, IntegrationCreateArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Integrations.
     * @param {IntegrationCreateManyArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integration = await prisma.integration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationCreateManyArgs>(args?: SelectSubset<T, IntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Integration.
     * @param {IntegrationDeleteArgs} args - Arguments to delete one Integration.
     * @example
     * // Delete one Integration
     * const Integration = await prisma.integration.delete({
     *   where: {
     *     // ... filter to delete one Integration
     *   }
     * })
     * 
     */
    delete<T extends IntegrationDeleteArgs>(args: SelectSubset<T, IntegrationDeleteArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Integration.
     * @param {IntegrationUpdateArgs} args - Arguments to update one Integration.
     * @example
     * // Update one Integration
     * const integration = await prisma.integration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationUpdateArgs>(args: SelectSubset<T, IntegrationUpdateArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Integrations.
     * @param {IntegrationDeleteManyArgs} args - Arguments to filter Integrations to delete.
     * @example
     * // Delete a few Integrations
     * const { count } = await prisma.integration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationDeleteManyArgs>(args?: SelectSubset<T, IntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integrations
     * const integration = await prisma.integration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationUpdateManyArgs>(args: SelectSubset<T, IntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Integration.
     * @param {IntegrationUpsertArgs} args - Arguments to update or create a Integration.
     * @example
     * // Update or create a Integration
     * const integration = await prisma.integration.upsert({
     *   create: {
     *     // ... data to create a Integration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integration we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationUpsertArgs>(args: SelectSubset<T, IntegrationUpsertArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationCountArgs} args - Arguments to filter Integrations to count.
     * @example
     * // Count the number of Integrations
     * const count = await prisma.integration.count({
     *   where: {
     *     // ... the filter for the Integrations we want to count
     *   }
     * })
    **/
    count<T extends IntegrationCountArgs>(
      args?: Subset<T, IntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Integration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntegrationAggregateArgs>(args: Subset<T, IntegrationAggregateArgs>): Prisma.PrismaPromise<GetIntegrationAggregateType<T>>

    /**
     * Group by Integration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Integration model
   */
  readonly fields: IntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Integration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatbot<T extends Integration$chatbotArgs<ExtArgs> = {}>(args?: Subset<T, Integration$chatbotArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Integration model
   */
  interface IntegrationFieldRefs {
    readonly id: FieldRef<"Integration", 'Int'>
    readonly userId: FieldRef<"Integration", 'Int'>
    readonly type: FieldRef<"Integration", 'String'>
    readonly token: FieldRef<"Integration", 'String'>
    readonly config: FieldRef<"Integration", 'String'>
    readonly createdAt: FieldRef<"Integration", 'DateTime'>
    readonly updatedAt: FieldRef<"Integration", 'DateTime'>
    readonly chatbotId: FieldRef<"Integration", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Integration findUnique
   */
  export type IntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration findUniqueOrThrow
   */
  export type IntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration findFirst
   */
  export type IntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration findFirstOrThrow
   */
  export type IntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration findMany
   */
  export type IntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration create
   */
  export type IntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Integration.
     */
    data: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>
  }

  /**
   * Integration createMany
   */
  export type IntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationCreateManyInput | IntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Integration update
   */
  export type IntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Integration.
     */
    data: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>
    /**
     * Choose, which Integration to update.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration updateMany
   */
  export type IntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationWhereInput
    /**
     * Limit how many Integrations to update.
     */
    limit?: number
  }

  /**
   * Integration upsert
   */
  export type IntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Integration to update in case it exists.
     */
    where: IntegrationWhereUniqueInput
    /**
     * In case the Integration found by the `where` argument doesn't exist, create a new Integration with this data.
     */
    create: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>
    /**
     * In case the Integration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>
  }

  /**
   * Integration delete
   */
  export type IntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter which Integration to delete.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration deleteMany
   */
  export type IntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integrations to delete
     */
    where?: IntegrationWhereInput
    /**
     * Limit how many Integrations to delete.
     */
    limit?: number
  }

  /**
   * Integration.chatbot
   */
  export type Integration$chatbotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot
     */
    select?: ChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot
     */
    omit?: ChatbotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotInclude<ExtArgs> | null
    where?: ChatbotWhereInput
  }

  /**
   * Integration without action
   */
  export type IntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
  }


  /**
   * Model MessageTemplate
   */

  export type AggregateMessageTemplate = {
    _count: MessageTemplateCountAggregateOutputType | null
    _avg: MessageTemplateAvgAggregateOutputType | null
    _sum: MessageTemplateSumAggregateOutputType | null
    _min: MessageTemplateMinAggregateOutputType | null
    _max: MessageTemplateMaxAggregateOutputType | null
  }

  export type MessageTemplateAvgAggregateOutputType = {
    id: number | null
    chatbotId: number | null
  }

  export type MessageTemplateSumAggregateOutputType = {
    id: number | null
    chatbotId: number | null
  }

  export type MessageTemplateMinAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageTemplateMaxAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageTemplateCountAggregateOutputType = {
    id: number
    chatbotId: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageTemplateAvgAggregateInputType = {
    id?: true
    chatbotId?: true
  }

  export type MessageTemplateSumAggregateInputType = {
    id?: true
    chatbotId?: true
  }

  export type MessageTemplateMinAggregateInputType = {
    id?: true
    chatbotId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageTemplateMaxAggregateInputType = {
    id?: true
    chatbotId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageTemplateCountAggregateInputType = {
    id?: true
    chatbotId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageTemplate to aggregate.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageTemplates
    **/
    _count?: true | MessageTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageTemplateMaxAggregateInputType
  }

  export type GetMessageTemplateAggregateType<T extends MessageTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageTemplate[P]>
      : GetScalarType<T[P], AggregateMessageTemplate[P]>
  }




  export type MessageTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageTemplateWhereInput
    orderBy?: MessageTemplateOrderByWithAggregationInput | MessageTemplateOrderByWithAggregationInput[]
    by: MessageTemplateScalarFieldEnum[] | MessageTemplateScalarFieldEnum
    having?: MessageTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageTemplateCountAggregateInputType | true
    _avg?: MessageTemplateAvgAggregateInputType
    _sum?: MessageTemplateSumAggregateInputType
    _min?: MessageTemplateMinAggregateInputType
    _max?: MessageTemplateMaxAggregateInputType
  }

  export type MessageTemplateGroupByOutputType = {
    id: number
    chatbotId: number
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: MessageTemplateCountAggregateOutputType | null
    _avg: MessageTemplateAvgAggregateOutputType | null
    _sum: MessageTemplateSumAggregateOutputType | null
    _min: MessageTemplateMinAggregateOutputType | null
    _max: MessageTemplateMaxAggregateOutputType | null
  }

  type GetMessageTemplateGroupByPayload<T extends MessageTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], MessageTemplateGroupByOutputType[P]>
        }
      >
    >


  export type MessageTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatbotId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatbot?: boolean | ChatbotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageTemplate"]>



  export type MessageTemplateSelectScalar = {
    id?: boolean
    chatbotId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatbotId" | "title" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["messageTemplate"]>
  export type MessageTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatbot?: boolean | ChatbotDefaultArgs<ExtArgs>
  }

  export type $MessageTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageTemplate"
    objects: {
      chatbot: Prisma.$ChatbotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatbotId: number
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["messageTemplate"]>
    composites: {}
  }

  type MessageTemplateGetPayload<S extends boolean | null | undefined | MessageTemplateDefaultArgs> = $Result.GetResult<Prisma.$MessageTemplatePayload, S>

  type MessageTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageTemplateCountAggregateInputType | true
    }

  export interface MessageTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageTemplate'], meta: { name: 'MessageTemplate' } }
    /**
     * Find zero or one MessageTemplate that matches the filter.
     * @param {MessageTemplateFindUniqueArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageTemplateFindUniqueArgs>(args: SelectSubset<T, MessageTemplateFindUniqueArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageTemplateFindUniqueOrThrowArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindFirstArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageTemplateFindFirstArgs>(args?: SelectSubset<T, MessageTemplateFindFirstArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindFirstOrThrowArgs} args - Arguments to find a MessageTemplate
     * @example
     * // Get one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageTemplates
     * const messageTemplates = await prisma.messageTemplate.findMany()
     * 
     * // Get first 10 MessageTemplates
     * const messageTemplates = await prisma.messageTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageTemplateWithIdOnly = await prisma.messageTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageTemplateFindManyArgs>(args?: SelectSubset<T, MessageTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageTemplate.
     * @param {MessageTemplateCreateArgs} args - Arguments to create a MessageTemplate.
     * @example
     * // Create one MessageTemplate
     * const MessageTemplate = await prisma.messageTemplate.create({
     *   data: {
     *     // ... data to create a MessageTemplate
     *   }
     * })
     * 
     */
    create<T extends MessageTemplateCreateArgs>(args: SelectSubset<T, MessageTemplateCreateArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageTemplates.
     * @param {MessageTemplateCreateManyArgs} args - Arguments to create many MessageTemplates.
     * @example
     * // Create many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageTemplateCreateManyArgs>(args?: SelectSubset<T, MessageTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MessageTemplate.
     * @param {MessageTemplateDeleteArgs} args - Arguments to delete one MessageTemplate.
     * @example
     * // Delete one MessageTemplate
     * const MessageTemplate = await prisma.messageTemplate.delete({
     *   where: {
     *     // ... filter to delete one MessageTemplate
     *   }
     * })
     * 
     */
    delete<T extends MessageTemplateDeleteArgs>(args: SelectSubset<T, MessageTemplateDeleteArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageTemplate.
     * @param {MessageTemplateUpdateArgs} args - Arguments to update one MessageTemplate.
     * @example
     * // Update one MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageTemplateUpdateArgs>(args: SelectSubset<T, MessageTemplateUpdateArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageTemplates.
     * @param {MessageTemplateDeleteManyArgs} args - Arguments to filter MessageTemplates to delete.
     * @example
     * // Delete a few MessageTemplates
     * const { count } = await prisma.messageTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageTemplateDeleteManyArgs>(args?: SelectSubset<T, MessageTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageTemplates
     * const messageTemplate = await prisma.messageTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageTemplateUpdateManyArgs>(args: SelectSubset<T, MessageTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageTemplate.
     * @param {MessageTemplateUpsertArgs} args - Arguments to update or create a MessageTemplate.
     * @example
     * // Update or create a MessageTemplate
     * const messageTemplate = await prisma.messageTemplate.upsert({
     *   create: {
     *     // ... data to create a MessageTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageTemplate we want to update
     *   }
     * })
     */
    upsert<T extends MessageTemplateUpsertArgs>(args: SelectSubset<T, MessageTemplateUpsertArgs<ExtArgs>>): Prisma__MessageTemplateClient<$Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateCountArgs} args - Arguments to filter MessageTemplates to count.
     * @example
     * // Count the number of MessageTemplates
     * const count = await prisma.messageTemplate.count({
     *   where: {
     *     // ... the filter for the MessageTemplates we want to count
     *   }
     * })
    **/
    count<T extends MessageTemplateCountArgs>(
      args?: Subset<T, MessageTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageTemplateAggregateArgs>(args: Subset<T, MessageTemplateAggregateArgs>): Prisma.PrismaPromise<GetMessageTemplateAggregateType<T>>

    /**
     * Group by MessageTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageTemplateGroupByArgs['orderBy'] }
        : { orderBy?: MessageTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageTemplate model
   */
  readonly fields: MessageTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatbot<T extends ChatbotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatbotDefaultArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageTemplate model
   */
  interface MessageTemplateFieldRefs {
    readonly id: FieldRef<"MessageTemplate", 'Int'>
    readonly chatbotId: FieldRef<"MessageTemplate", 'Int'>
    readonly title: FieldRef<"MessageTemplate", 'String'>
    readonly content: FieldRef<"MessageTemplate", 'String'>
    readonly createdAt: FieldRef<"MessageTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageTemplate findUnique
   */
  export type MessageTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate findUniqueOrThrow
   */
  export type MessageTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate findFirst
   */
  export type MessageTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageTemplates.
     */
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate findFirstOrThrow
   */
  export type MessageTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplate to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageTemplates.
     */
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate findMany
   */
  export type MessageTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter, which MessageTemplates to fetch.
     */
    where?: MessageTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageTemplates to fetch.
     */
    orderBy?: MessageTemplateOrderByWithRelationInput | MessageTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageTemplates.
     */
    cursor?: MessageTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageTemplates.
     */
    skip?: number
    distinct?: MessageTemplateScalarFieldEnum | MessageTemplateScalarFieldEnum[]
  }

  /**
   * MessageTemplate create
   */
  export type MessageTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageTemplate.
     */
    data: XOR<MessageTemplateCreateInput, MessageTemplateUncheckedCreateInput>
  }

  /**
   * MessageTemplate createMany
   */
  export type MessageTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageTemplates.
     */
    data: MessageTemplateCreateManyInput | MessageTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageTemplate update
   */
  export type MessageTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageTemplate.
     */
    data: XOR<MessageTemplateUpdateInput, MessageTemplateUncheckedUpdateInput>
    /**
     * Choose, which MessageTemplate to update.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate updateMany
   */
  export type MessageTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageTemplates.
     */
    data: XOR<MessageTemplateUpdateManyMutationInput, MessageTemplateUncheckedUpdateManyInput>
    /**
     * Filter which MessageTemplates to update
     */
    where?: MessageTemplateWhereInput
    /**
     * Limit how many MessageTemplates to update.
     */
    limit?: number
  }

  /**
   * MessageTemplate upsert
   */
  export type MessageTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageTemplate to update in case it exists.
     */
    where: MessageTemplateWhereUniqueInput
    /**
     * In case the MessageTemplate found by the `where` argument doesn't exist, create a new MessageTemplate with this data.
     */
    create: XOR<MessageTemplateCreateInput, MessageTemplateUncheckedCreateInput>
    /**
     * In case the MessageTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageTemplateUpdateInput, MessageTemplateUncheckedUpdateInput>
  }

  /**
   * MessageTemplate delete
   */
  export type MessageTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
    /**
     * Filter which MessageTemplate to delete.
     */
    where: MessageTemplateWhereUniqueInput
  }

  /**
   * MessageTemplate deleteMany
   */
  export type MessageTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageTemplates to delete
     */
    where?: MessageTemplateWhereInput
    /**
     * Limit how many MessageTemplates to delete.
     */
    limit?: number
  }

  /**
   * MessageTemplate without action
   */
  export type MessageTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageTemplate
     */
    select?: MessageTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageTemplate
     */
    omit?: MessageTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageTemplateInclude<ExtArgs> | null
  }


  /**
   * Model ChatbotCustomization
   */

  export type AggregateChatbotCustomization = {
    _count: ChatbotCustomizationCountAggregateOutputType | null
    _avg: ChatbotCustomizationAvgAggregateOutputType | null
    _sum: ChatbotCustomizationSumAggregateOutputType | null
    _min: ChatbotCustomizationMinAggregateOutputType | null
    _max: ChatbotCustomizationMaxAggregateOutputType | null
  }

  export type ChatbotCustomizationAvgAggregateOutputType = {
    id: number | null
    chatbotId: number | null
  }

  export type ChatbotCustomizationSumAggregateOutputType = {
    id: number | null
    chatbotId: number | null
  }

  export type ChatbotCustomizationMinAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    name: string | null
    avatar: string | null
    greeting: string | null
    personality: string | null
    tone: string | null
    language: string | null
    config: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatbotCustomizationMaxAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    name: string | null
    avatar: string | null
    greeting: string | null
    personality: string | null
    tone: string | null
    language: string | null
    config: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatbotCustomizationCountAggregateOutputType = {
    id: number
    chatbotId: number
    name: number
    avatar: number
    greeting: number
    personality: number
    tone: number
    language: number
    config: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatbotCustomizationAvgAggregateInputType = {
    id?: true
    chatbotId?: true
  }

  export type ChatbotCustomizationSumAggregateInputType = {
    id?: true
    chatbotId?: true
  }

  export type ChatbotCustomizationMinAggregateInputType = {
    id?: true
    chatbotId?: true
    name?: true
    avatar?: true
    greeting?: true
    personality?: true
    tone?: true
    language?: true
    config?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatbotCustomizationMaxAggregateInputType = {
    id?: true
    chatbotId?: true
    name?: true
    avatar?: true
    greeting?: true
    personality?: true
    tone?: true
    language?: true
    config?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatbotCustomizationCountAggregateInputType = {
    id?: true
    chatbotId?: true
    name?: true
    avatar?: true
    greeting?: true
    personality?: true
    tone?: true
    language?: true
    config?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatbotCustomizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatbotCustomization to aggregate.
     */
    where?: ChatbotCustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatbotCustomizations to fetch.
     */
    orderBy?: ChatbotCustomizationOrderByWithRelationInput | ChatbotCustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatbotCustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatbotCustomizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatbotCustomizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatbotCustomizations
    **/
    _count?: true | ChatbotCustomizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatbotCustomizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatbotCustomizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatbotCustomizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatbotCustomizationMaxAggregateInputType
  }

  export type GetChatbotCustomizationAggregateType<T extends ChatbotCustomizationAggregateArgs> = {
        [P in keyof T & keyof AggregateChatbotCustomization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatbotCustomization[P]>
      : GetScalarType<T[P], AggregateChatbotCustomization[P]>
  }




  export type ChatbotCustomizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatbotCustomizationWhereInput
    orderBy?: ChatbotCustomizationOrderByWithAggregationInput | ChatbotCustomizationOrderByWithAggregationInput[]
    by: ChatbotCustomizationScalarFieldEnum[] | ChatbotCustomizationScalarFieldEnum
    having?: ChatbotCustomizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatbotCustomizationCountAggregateInputType | true
    _avg?: ChatbotCustomizationAvgAggregateInputType
    _sum?: ChatbotCustomizationSumAggregateInputType
    _min?: ChatbotCustomizationMinAggregateInputType
    _max?: ChatbotCustomizationMaxAggregateInputType
  }

  export type ChatbotCustomizationGroupByOutputType = {
    id: number
    chatbotId: number
    name: string | null
    avatar: string | null
    greeting: string | null
    personality: string | null
    tone: string | null
    language: string | null
    config: string
    createdAt: Date
    updatedAt: Date
    _count: ChatbotCustomizationCountAggregateOutputType | null
    _avg: ChatbotCustomizationAvgAggregateOutputType | null
    _sum: ChatbotCustomizationSumAggregateOutputType | null
    _min: ChatbotCustomizationMinAggregateOutputType | null
    _max: ChatbotCustomizationMaxAggregateOutputType | null
  }

  type GetChatbotCustomizationGroupByPayload<T extends ChatbotCustomizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatbotCustomizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatbotCustomizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatbotCustomizationGroupByOutputType[P]>
            : GetScalarType<T[P], ChatbotCustomizationGroupByOutputType[P]>
        }
      >
    >


  export type ChatbotCustomizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatbotId?: boolean
    name?: boolean
    avatar?: boolean
    greeting?: boolean
    personality?: boolean
    tone?: boolean
    language?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatbot?: boolean | ChatbotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatbotCustomization"]>



  export type ChatbotCustomizationSelectScalar = {
    id?: boolean
    chatbotId?: boolean
    name?: boolean
    avatar?: boolean
    greeting?: boolean
    personality?: boolean
    tone?: boolean
    language?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatbotCustomizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatbotId" | "name" | "avatar" | "greeting" | "personality" | "tone" | "language" | "config" | "createdAt" | "updatedAt", ExtArgs["result"]["chatbotCustomization"]>
  export type ChatbotCustomizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatbot?: boolean | ChatbotDefaultArgs<ExtArgs>
  }

  export type $ChatbotCustomizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatbotCustomization"
    objects: {
      chatbot: Prisma.$ChatbotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatbotId: number
      name: string | null
      avatar: string | null
      greeting: string | null
      personality: string | null
      tone: string | null
      language: string | null
      config: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatbotCustomization"]>
    composites: {}
  }

  type ChatbotCustomizationGetPayload<S extends boolean | null | undefined | ChatbotCustomizationDefaultArgs> = $Result.GetResult<Prisma.$ChatbotCustomizationPayload, S>

  type ChatbotCustomizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatbotCustomizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatbotCustomizationCountAggregateInputType | true
    }

  export interface ChatbotCustomizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatbotCustomization'], meta: { name: 'ChatbotCustomization' } }
    /**
     * Find zero or one ChatbotCustomization that matches the filter.
     * @param {ChatbotCustomizationFindUniqueArgs} args - Arguments to find a ChatbotCustomization
     * @example
     * // Get one ChatbotCustomization
     * const chatbotCustomization = await prisma.chatbotCustomization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatbotCustomizationFindUniqueArgs>(args: SelectSubset<T, ChatbotCustomizationFindUniqueArgs<ExtArgs>>): Prisma__ChatbotCustomizationClient<$Result.GetResult<Prisma.$ChatbotCustomizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatbotCustomization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatbotCustomizationFindUniqueOrThrowArgs} args - Arguments to find a ChatbotCustomization
     * @example
     * // Get one ChatbotCustomization
     * const chatbotCustomization = await prisma.chatbotCustomization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatbotCustomizationFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatbotCustomizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatbotCustomizationClient<$Result.GetResult<Prisma.$ChatbotCustomizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatbotCustomization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotCustomizationFindFirstArgs} args - Arguments to find a ChatbotCustomization
     * @example
     * // Get one ChatbotCustomization
     * const chatbotCustomization = await prisma.chatbotCustomization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatbotCustomizationFindFirstArgs>(args?: SelectSubset<T, ChatbotCustomizationFindFirstArgs<ExtArgs>>): Prisma__ChatbotCustomizationClient<$Result.GetResult<Prisma.$ChatbotCustomizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatbotCustomization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotCustomizationFindFirstOrThrowArgs} args - Arguments to find a ChatbotCustomization
     * @example
     * // Get one ChatbotCustomization
     * const chatbotCustomization = await prisma.chatbotCustomization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatbotCustomizationFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatbotCustomizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatbotCustomizationClient<$Result.GetResult<Prisma.$ChatbotCustomizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatbotCustomizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotCustomizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatbotCustomizations
     * const chatbotCustomizations = await prisma.chatbotCustomization.findMany()
     * 
     * // Get first 10 ChatbotCustomizations
     * const chatbotCustomizations = await prisma.chatbotCustomization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatbotCustomizationWithIdOnly = await prisma.chatbotCustomization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatbotCustomizationFindManyArgs>(args?: SelectSubset<T, ChatbotCustomizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatbotCustomizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatbotCustomization.
     * @param {ChatbotCustomizationCreateArgs} args - Arguments to create a ChatbotCustomization.
     * @example
     * // Create one ChatbotCustomization
     * const ChatbotCustomization = await prisma.chatbotCustomization.create({
     *   data: {
     *     // ... data to create a ChatbotCustomization
     *   }
     * })
     * 
     */
    create<T extends ChatbotCustomizationCreateArgs>(args: SelectSubset<T, ChatbotCustomizationCreateArgs<ExtArgs>>): Prisma__ChatbotCustomizationClient<$Result.GetResult<Prisma.$ChatbotCustomizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatbotCustomizations.
     * @param {ChatbotCustomizationCreateManyArgs} args - Arguments to create many ChatbotCustomizations.
     * @example
     * // Create many ChatbotCustomizations
     * const chatbotCustomization = await prisma.chatbotCustomization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatbotCustomizationCreateManyArgs>(args?: SelectSubset<T, ChatbotCustomizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatbotCustomization.
     * @param {ChatbotCustomizationDeleteArgs} args - Arguments to delete one ChatbotCustomization.
     * @example
     * // Delete one ChatbotCustomization
     * const ChatbotCustomization = await prisma.chatbotCustomization.delete({
     *   where: {
     *     // ... filter to delete one ChatbotCustomization
     *   }
     * })
     * 
     */
    delete<T extends ChatbotCustomizationDeleteArgs>(args: SelectSubset<T, ChatbotCustomizationDeleteArgs<ExtArgs>>): Prisma__ChatbotCustomizationClient<$Result.GetResult<Prisma.$ChatbotCustomizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatbotCustomization.
     * @param {ChatbotCustomizationUpdateArgs} args - Arguments to update one ChatbotCustomization.
     * @example
     * // Update one ChatbotCustomization
     * const chatbotCustomization = await prisma.chatbotCustomization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatbotCustomizationUpdateArgs>(args: SelectSubset<T, ChatbotCustomizationUpdateArgs<ExtArgs>>): Prisma__ChatbotCustomizationClient<$Result.GetResult<Prisma.$ChatbotCustomizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatbotCustomizations.
     * @param {ChatbotCustomizationDeleteManyArgs} args - Arguments to filter ChatbotCustomizations to delete.
     * @example
     * // Delete a few ChatbotCustomizations
     * const { count } = await prisma.chatbotCustomization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatbotCustomizationDeleteManyArgs>(args?: SelectSubset<T, ChatbotCustomizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatbotCustomizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotCustomizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatbotCustomizations
     * const chatbotCustomization = await prisma.chatbotCustomization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatbotCustomizationUpdateManyArgs>(args: SelectSubset<T, ChatbotCustomizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatbotCustomization.
     * @param {ChatbotCustomizationUpsertArgs} args - Arguments to update or create a ChatbotCustomization.
     * @example
     * // Update or create a ChatbotCustomization
     * const chatbotCustomization = await prisma.chatbotCustomization.upsert({
     *   create: {
     *     // ... data to create a ChatbotCustomization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatbotCustomization we want to update
     *   }
     * })
     */
    upsert<T extends ChatbotCustomizationUpsertArgs>(args: SelectSubset<T, ChatbotCustomizationUpsertArgs<ExtArgs>>): Prisma__ChatbotCustomizationClient<$Result.GetResult<Prisma.$ChatbotCustomizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatbotCustomizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotCustomizationCountArgs} args - Arguments to filter ChatbotCustomizations to count.
     * @example
     * // Count the number of ChatbotCustomizations
     * const count = await prisma.chatbotCustomization.count({
     *   where: {
     *     // ... the filter for the ChatbotCustomizations we want to count
     *   }
     * })
    **/
    count<T extends ChatbotCustomizationCountArgs>(
      args?: Subset<T, ChatbotCustomizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatbotCustomizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatbotCustomization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotCustomizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatbotCustomizationAggregateArgs>(args: Subset<T, ChatbotCustomizationAggregateArgs>): Prisma.PrismaPromise<GetChatbotCustomizationAggregateType<T>>

    /**
     * Group by ChatbotCustomization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotCustomizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatbotCustomizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatbotCustomizationGroupByArgs['orderBy'] }
        : { orderBy?: ChatbotCustomizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatbotCustomizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatbotCustomizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatbotCustomization model
   */
  readonly fields: ChatbotCustomizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatbotCustomization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatbotCustomizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatbot<T extends ChatbotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatbotDefaultArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatbotCustomization model
   */
  interface ChatbotCustomizationFieldRefs {
    readonly id: FieldRef<"ChatbotCustomization", 'Int'>
    readonly chatbotId: FieldRef<"ChatbotCustomization", 'Int'>
    readonly name: FieldRef<"ChatbotCustomization", 'String'>
    readonly avatar: FieldRef<"ChatbotCustomization", 'String'>
    readonly greeting: FieldRef<"ChatbotCustomization", 'String'>
    readonly personality: FieldRef<"ChatbotCustomization", 'String'>
    readonly tone: FieldRef<"ChatbotCustomization", 'String'>
    readonly language: FieldRef<"ChatbotCustomization", 'String'>
    readonly config: FieldRef<"ChatbotCustomization", 'String'>
    readonly createdAt: FieldRef<"ChatbotCustomization", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatbotCustomization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatbotCustomization findUnique
   */
  export type ChatbotCustomizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
    /**
     * Filter, which ChatbotCustomization to fetch.
     */
    where: ChatbotCustomizationWhereUniqueInput
  }

  /**
   * ChatbotCustomization findUniqueOrThrow
   */
  export type ChatbotCustomizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
    /**
     * Filter, which ChatbotCustomization to fetch.
     */
    where: ChatbotCustomizationWhereUniqueInput
  }

  /**
   * ChatbotCustomization findFirst
   */
  export type ChatbotCustomizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
    /**
     * Filter, which ChatbotCustomization to fetch.
     */
    where?: ChatbotCustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatbotCustomizations to fetch.
     */
    orderBy?: ChatbotCustomizationOrderByWithRelationInput | ChatbotCustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatbotCustomizations.
     */
    cursor?: ChatbotCustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatbotCustomizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatbotCustomizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatbotCustomizations.
     */
    distinct?: ChatbotCustomizationScalarFieldEnum | ChatbotCustomizationScalarFieldEnum[]
  }

  /**
   * ChatbotCustomization findFirstOrThrow
   */
  export type ChatbotCustomizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
    /**
     * Filter, which ChatbotCustomization to fetch.
     */
    where?: ChatbotCustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatbotCustomizations to fetch.
     */
    orderBy?: ChatbotCustomizationOrderByWithRelationInput | ChatbotCustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatbotCustomizations.
     */
    cursor?: ChatbotCustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatbotCustomizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatbotCustomizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatbotCustomizations.
     */
    distinct?: ChatbotCustomizationScalarFieldEnum | ChatbotCustomizationScalarFieldEnum[]
  }

  /**
   * ChatbotCustomization findMany
   */
  export type ChatbotCustomizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
    /**
     * Filter, which ChatbotCustomizations to fetch.
     */
    where?: ChatbotCustomizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatbotCustomizations to fetch.
     */
    orderBy?: ChatbotCustomizationOrderByWithRelationInput | ChatbotCustomizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatbotCustomizations.
     */
    cursor?: ChatbotCustomizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatbotCustomizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatbotCustomizations.
     */
    skip?: number
    distinct?: ChatbotCustomizationScalarFieldEnum | ChatbotCustomizationScalarFieldEnum[]
  }

  /**
   * ChatbotCustomization create
   */
  export type ChatbotCustomizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatbotCustomization.
     */
    data: XOR<ChatbotCustomizationCreateInput, ChatbotCustomizationUncheckedCreateInput>
  }

  /**
   * ChatbotCustomization createMany
   */
  export type ChatbotCustomizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatbotCustomizations.
     */
    data: ChatbotCustomizationCreateManyInput | ChatbotCustomizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatbotCustomization update
   */
  export type ChatbotCustomizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatbotCustomization.
     */
    data: XOR<ChatbotCustomizationUpdateInput, ChatbotCustomizationUncheckedUpdateInput>
    /**
     * Choose, which ChatbotCustomization to update.
     */
    where: ChatbotCustomizationWhereUniqueInput
  }

  /**
   * ChatbotCustomization updateMany
   */
  export type ChatbotCustomizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatbotCustomizations.
     */
    data: XOR<ChatbotCustomizationUpdateManyMutationInput, ChatbotCustomizationUncheckedUpdateManyInput>
    /**
     * Filter which ChatbotCustomizations to update
     */
    where?: ChatbotCustomizationWhereInput
    /**
     * Limit how many ChatbotCustomizations to update.
     */
    limit?: number
  }

  /**
   * ChatbotCustomization upsert
   */
  export type ChatbotCustomizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatbotCustomization to update in case it exists.
     */
    where: ChatbotCustomizationWhereUniqueInput
    /**
     * In case the ChatbotCustomization found by the `where` argument doesn't exist, create a new ChatbotCustomization with this data.
     */
    create: XOR<ChatbotCustomizationCreateInput, ChatbotCustomizationUncheckedCreateInput>
    /**
     * In case the ChatbotCustomization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatbotCustomizationUpdateInput, ChatbotCustomizationUncheckedUpdateInput>
  }

  /**
   * ChatbotCustomization delete
   */
  export type ChatbotCustomizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
    /**
     * Filter which ChatbotCustomization to delete.
     */
    where: ChatbotCustomizationWhereUniqueInput
  }

  /**
   * ChatbotCustomization deleteMany
   */
  export type ChatbotCustomizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatbotCustomizations to delete
     */
    where?: ChatbotCustomizationWhereInput
    /**
     * Limit how many ChatbotCustomizations to delete.
     */
    limit?: number
  }

  /**
   * ChatbotCustomization without action
   */
  export type ChatbotCustomizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotCustomization
     */
    select?: ChatbotCustomizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatbotCustomization
     */
    omit?: ChatbotCustomizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotCustomizationInclude<ExtArgs> | null
  }


  /**
   * Model Flow
   */

  export type AggregateFlow = {
    _count: FlowCountAggregateOutputType | null
    _avg: FlowAvgAggregateOutputType | null
    _sum: FlowSumAggregateOutputType | null
    _min: FlowMinAggregateOutputType | null
    _max: FlowMaxAggregateOutputType | null
  }

  export type FlowAvgAggregateOutputType = {
    id: number | null
    chatbotId: number | null
  }

  export type FlowSumAggregateOutputType = {
    id: number | null
    chatbotId: number | null
  }

  export type FlowMinAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    name: string | null
    steps: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowMaxAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    name: string | null
    steps: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowCountAggregateOutputType = {
    id: number
    chatbotId: number
    name: number
    steps: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlowAvgAggregateInputType = {
    id?: true
    chatbotId?: true
  }

  export type FlowSumAggregateInputType = {
    id?: true
    chatbotId?: true
  }

  export type FlowMinAggregateInputType = {
    id?: true
    chatbotId?: true
    name?: true
    steps?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowMaxAggregateInputType = {
    id?: true
    chatbotId?: true
    name?: true
    steps?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowCountAggregateInputType = {
    id?: true
    chatbotId?: true
    name?: true
    steps?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flow to aggregate.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flows
    **/
    _count?: true | FlowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowMaxAggregateInputType
  }

  export type GetFlowAggregateType<T extends FlowAggregateArgs> = {
        [P in keyof T & keyof AggregateFlow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlow[P]>
      : GetScalarType<T[P], AggregateFlow[P]>
  }




  export type FlowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowWhereInput
    orderBy?: FlowOrderByWithAggregationInput | FlowOrderByWithAggregationInput[]
    by: FlowScalarFieldEnum[] | FlowScalarFieldEnum
    having?: FlowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowCountAggregateInputType | true
    _avg?: FlowAvgAggregateInputType
    _sum?: FlowSumAggregateInputType
    _min?: FlowMinAggregateInputType
    _max?: FlowMaxAggregateInputType
  }

  export type FlowGroupByOutputType = {
    id: number
    chatbotId: number
    name: string
    steps: string
    createdAt: Date
    updatedAt: Date
    _count: FlowCountAggregateOutputType | null
    _avg: FlowAvgAggregateOutputType | null
    _sum: FlowSumAggregateOutputType | null
    _min: FlowMinAggregateOutputType | null
    _max: FlowMaxAggregateOutputType | null
  }

  type GetFlowGroupByPayload<T extends FlowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowGroupByOutputType[P]>
            : GetScalarType<T[P], FlowGroupByOutputType[P]>
        }
      >
    >


  export type FlowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatbotId?: boolean
    name?: boolean
    steps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatbot?: boolean | ChatbotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flow"]>



  export type FlowSelectScalar = {
    id?: boolean
    chatbotId?: boolean
    name?: boolean
    steps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatbotId" | "name" | "steps" | "createdAt" | "updatedAt", ExtArgs["result"]["flow"]>
  export type FlowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatbot?: boolean | ChatbotDefaultArgs<ExtArgs>
  }

  export type $FlowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flow"
    objects: {
      chatbot: Prisma.$ChatbotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatbotId: number
      name: string
      steps: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flow"]>
    composites: {}
  }

  type FlowGetPayload<S extends boolean | null | undefined | FlowDefaultArgs> = $Result.GetResult<Prisma.$FlowPayload, S>

  type FlowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowCountAggregateInputType | true
    }

  export interface FlowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flow'], meta: { name: 'Flow' } }
    /**
     * Find zero or one Flow that matches the filter.
     * @param {FlowFindUniqueArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowFindUniqueArgs>(args: SelectSubset<T, FlowFindUniqueArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowFindUniqueOrThrowArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFindFirstArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowFindFirstArgs>(args?: SelectSubset<T, FlowFindFirstArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFindFirstOrThrowArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flows
     * const flows = await prisma.flow.findMany()
     * 
     * // Get first 10 Flows
     * const flows = await prisma.flow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowWithIdOnly = await prisma.flow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowFindManyArgs>(args?: SelectSubset<T, FlowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flow.
     * @param {FlowCreateArgs} args - Arguments to create a Flow.
     * @example
     * // Create one Flow
     * const Flow = await prisma.flow.create({
     *   data: {
     *     // ... data to create a Flow
     *   }
     * })
     * 
     */
    create<T extends FlowCreateArgs>(args: SelectSubset<T, FlowCreateArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flows.
     * @param {FlowCreateManyArgs} args - Arguments to create many Flows.
     * @example
     * // Create many Flows
     * const flow = await prisma.flow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowCreateManyArgs>(args?: SelectSubset<T, FlowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flow.
     * @param {FlowDeleteArgs} args - Arguments to delete one Flow.
     * @example
     * // Delete one Flow
     * const Flow = await prisma.flow.delete({
     *   where: {
     *     // ... filter to delete one Flow
     *   }
     * })
     * 
     */
    delete<T extends FlowDeleteArgs>(args: SelectSubset<T, FlowDeleteArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flow.
     * @param {FlowUpdateArgs} args - Arguments to update one Flow.
     * @example
     * // Update one Flow
     * const flow = await prisma.flow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowUpdateArgs>(args: SelectSubset<T, FlowUpdateArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flows.
     * @param {FlowDeleteManyArgs} args - Arguments to filter Flows to delete.
     * @example
     * // Delete a few Flows
     * const { count } = await prisma.flow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowDeleteManyArgs>(args?: SelectSubset<T, FlowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flows
     * const flow = await prisma.flow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowUpdateManyArgs>(args: SelectSubset<T, FlowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flow.
     * @param {FlowUpsertArgs} args - Arguments to update or create a Flow.
     * @example
     * // Update or create a Flow
     * const flow = await prisma.flow.upsert({
     *   create: {
     *     // ... data to create a Flow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flow we want to update
     *   }
     * })
     */
    upsert<T extends FlowUpsertArgs>(args: SelectSubset<T, FlowUpsertArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowCountArgs} args - Arguments to filter Flows to count.
     * @example
     * // Count the number of Flows
     * const count = await prisma.flow.count({
     *   where: {
     *     // ... the filter for the Flows we want to count
     *   }
     * })
    **/
    count<T extends FlowCountArgs>(
      args?: Subset<T, FlowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlowAggregateArgs>(args: Subset<T, FlowAggregateArgs>): Prisma.PrismaPromise<GetFlowAggregateType<T>>

    /**
     * Group by Flow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowGroupByArgs['orderBy'] }
        : { orderBy?: FlowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flow model
   */
  readonly fields: FlowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatbot<T extends ChatbotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatbotDefaultArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flow model
   */
  interface FlowFieldRefs {
    readonly id: FieldRef<"Flow", 'Int'>
    readonly chatbotId: FieldRef<"Flow", 'Int'>
    readonly name: FieldRef<"Flow", 'String'>
    readonly steps: FieldRef<"Flow", 'String'>
    readonly createdAt: FieldRef<"Flow", 'DateTime'>
    readonly updatedAt: FieldRef<"Flow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flow findUnique
   */
  export type FlowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter, which Flow to fetch.
     */
    where: FlowWhereUniqueInput
  }

  /**
   * Flow findUniqueOrThrow
   */
  export type FlowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter, which Flow to fetch.
     */
    where: FlowWhereUniqueInput
  }

  /**
   * Flow findFirst
   */
  export type FlowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter, which Flow to fetch.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flows.
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flows.
     */
    distinct?: FlowScalarFieldEnum | FlowScalarFieldEnum[]
  }

  /**
   * Flow findFirstOrThrow
   */
  export type FlowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter, which Flow to fetch.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flows.
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flows.
     */
    distinct?: FlowScalarFieldEnum | FlowScalarFieldEnum[]
  }

  /**
   * Flow findMany
   */
  export type FlowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter, which Flows to fetch.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flows.
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    distinct?: FlowScalarFieldEnum | FlowScalarFieldEnum[]
  }

  /**
   * Flow create
   */
  export type FlowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * The data needed to create a Flow.
     */
    data: XOR<FlowCreateInput, FlowUncheckedCreateInput>
  }

  /**
   * Flow createMany
   */
  export type FlowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flows.
     */
    data: FlowCreateManyInput | FlowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flow update
   */
  export type FlowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * The data needed to update a Flow.
     */
    data: XOR<FlowUpdateInput, FlowUncheckedUpdateInput>
    /**
     * Choose, which Flow to update.
     */
    where: FlowWhereUniqueInput
  }

  /**
   * Flow updateMany
   */
  export type FlowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flows.
     */
    data: XOR<FlowUpdateManyMutationInput, FlowUncheckedUpdateManyInput>
    /**
     * Filter which Flows to update
     */
    where?: FlowWhereInput
    /**
     * Limit how many Flows to update.
     */
    limit?: number
  }

  /**
   * Flow upsert
   */
  export type FlowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * The filter to search for the Flow to update in case it exists.
     */
    where: FlowWhereUniqueInput
    /**
     * In case the Flow found by the `where` argument doesn't exist, create a new Flow with this data.
     */
    create: XOR<FlowCreateInput, FlowUncheckedCreateInput>
    /**
     * In case the Flow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowUpdateInput, FlowUncheckedUpdateInput>
  }

  /**
   * Flow delete
   */
  export type FlowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter which Flow to delete.
     */
    where: FlowWhereUniqueInput
  }

  /**
   * Flow deleteMany
   */
  export type FlowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flows to delete
     */
    where?: FlowWhereInput
    /**
     * Limit how many Flows to delete.
     */
    limit?: number
  }

  /**
   * Flow without action
   */
  export type FlowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
  }


  /**
   * Model Analytics
   */

  export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  export type AnalyticsAvgAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    userId: number | null
  }

  export type AnalyticsSumAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    userId: number | null
  }

  export type AnalyticsMinAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    userId: number | null
    action: string | null
    timestamp: Date | null
  }

  export type AnalyticsMaxAggregateOutputType = {
    id: number | null
    chatbotId: number | null
    userId: number | null
    action: string | null
    timestamp: Date | null
  }

  export type AnalyticsCountAggregateOutputType = {
    id: number
    chatbotId: number
    userId: number
    action: number
    timestamp: number
    _all: number
  }


  export type AnalyticsAvgAggregateInputType = {
    id?: true
    chatbotId?: true
    userId?: true
  }

  export type AnalyticsSumAggregateInputType = {
    id?: true
    chatbotId?: true
    userId?: true
  }

  export type AnalyticsMinAggregateInputType = {
    id?: true
    chatbotId?: true
    userId?: true
    action?: true
    timestamp?: true
  }

  export type AnalyticsMaxAggregateInputType = {
    id?: true
    chatbotId?: true
    userId?: true
    action?: true
    timestamp?: true
  }

  export type AnalyticsCountAggregateInputType = {
    id?: true
    chatbotId?: true
    userId?: true
    action?: true
    timestamp?: true
    _all?: true
  }

  export type AnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analytics
    **/
    _count?: true | AnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMaxAggregateInputType
  }

  export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics[P]>
      : GetScalarType<T[P], AggregateAnalytics[P]>
  }




  export type AnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithAggregationInput | AnalyticsOrderByWithAggregationInput[]
    by: AnalyticsScalarFieldEnum[] | AnalyticsScalarFieldEnum
    having?: AnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsCountAggregateInputType | true
    _avg?: AnalyticsAvgAggregateInputType
    _sum?: AnalyticsSumAggregateInputType
    _min?: AnalyticsMinAggregateInputType
    _max?: AnalyticsMaxAggregateInputType
  }

  export type AnalyticsGroupByOutputType = {
    id: number
    chatbotId: number
    userId: number | null
    action: string
    timestamp: Date
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatbotId?: boolean
    userId?: boolean
    action?: boolean
    timestamp?: boolean
    chatbot?: boolean | ChatbotDefaultArgs<ExtArgs>
    user?: boolean | Analytics$userArgs<ExtArgs>
  }, ExtArgs["result"]["analytics"]>



  export type AnalyticsSelectScalar = {
    id?: boolean
    chatbotId?: boolean
    userId?: boolean
    action?: boolean
    timestamp?: boolean
  }

  export type AnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatbotId" | "userId" | "action" | "timestamp", ExtArgs["result"]["analytics"]>
  export type AnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatbot?: boolean | ChatbotDefaultArgs<ExtArgs>
    user?: boolean | Analytics$userArgs<ExtArgs>
  }

  export type $AnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analytics"
    objects: {
      chatbot: Prisma.$ChatbotPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatbotId: number
      userId: number | null
      action: string
      timestamp: Date
    }, ExtArgs["result"]["analytics"]>
    composites: {}
  }

  type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsPayload, S>

  type AnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsCountAggregateInputType | true
    }

  export interface AnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analytics'], meta: { name: 'Analytics' } }
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsFindUniqueArgs>(args: SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsFindFirstArgs>(args?: SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     * 
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsWithIdOnly = await prisma.analytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsFindManyArgs>(args?: SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     * 
     */
    create<T extends AnalyticsCreateArgs>(args: SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analytics.
     * @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsCreateManyArgs>(args?: SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsDeleteArgs>(args: SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsUpdateArgs>(args: SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsUpdateManyArgs>(args: SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsUpsertArgs>(args: SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsCountArgs>(
      args?: Subset<T, AnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalyticsAggregateArgs>(args: Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>

    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analytics model
   */
  readonly fields: AnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatbot<T extends ChatbotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatbotDefaultArgs<ExtArgs>>): Prisma__ChatbotClient<$Result.GetResult<Prisma.$ChatbotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Analytics$userArgs<ExtArgs> = {}>(args?: Subset<T, Analytics$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Analytics model
   */
  interface AnalyticsFieldRefs {
    readonly id: FieldRef<"Analytics", 'Int'>
    readonly chatbotId: FieldRef<"Analytics", 'Int'>
    readonly userId: FieldRef<"Analytics", 'Int'>
    readonly action: FieldRef<"Analytics", 'String'>
    readonly timestamp: FieldRef<"Analytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analytics findUnique
   */
  export type AnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findUniqueOrThrow
   */
  export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findFirst
   */
  export type AnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findFirstOrThrow
   */
  export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findMany
   */
  export type AnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics create
   */
  export type AnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a Analytics.
     */
    data: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
  }

  /**
   * Analytics createMany
   */
  export type AnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics update
   */
  export type AnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a Analytics.
     */
    data: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
    /**
     * Choose, which Analytics to update.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics updateMany
   */
  export type AnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
  }

  /**
   * Analytics upsert
   */
  export type AnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: AnalyticsWhereUniqueInput
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
  }

  /**
   * Analytics delete
   */
  export type AnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
    /**
     * Filter which Analytics to delete.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics deleteMany
   */
  export type AnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to delete
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to delete.
     */
    limit?: number
  }

  /**
   * Analytics.user
   */
  export type Analytics$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Analytics without action
   */
  export type AnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalyticsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatbotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatbotScalarFieldEnum = (typeof ChatbotScalarFieldEnum)[keyof typeof ChatbotScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    chatbotId: 'chatbotId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    content: 'content',
    sender: 'sender',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const IntegrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    token: 'token',
    config: 'config',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    chatbotId: 'chatbotId'
  };

  export type IntegrationScalarFieldEnum = (typeof IntegrationScalarFieldEnum)[keyof typeof IntegrationScalarFieldEnum]


  export const MessageTemplateScalarFieldEnum: {
    id: 'id',
    chatbotId: 'chatbotId',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageTemplateScalarFieldEnum = (typeof MessageTemplateScalarFieldEnum)[keyof typeof MessageTemplateScalarFieldEnum]


  export const ChatbotCustomizationScalarFieldEnum: {
    id: 'id',
    chatbotId: 'chatbotId',
    name: 'name',
    avatar: 'avatar',
    greeting: 'greeting',
    personality: 'personality',
    tone: 'tone',
    language: 'language',
    config: 'config',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatbotCustomizationScalarFieldEnum = (typeof ChatbotCustomizationScalarFieldEnum)[keyof typeof ChatbotCustomizationScalarFieldEnum]


  export const FlowScalarFieldEnum: {
    id: 'id',
    chatbotId: 'chatbotId',
    name: 'name',
    steps: 'steps',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlowScalarFieldEnum = (typeof FlowScalarFieldEnum)[keyof typeof FlowScalarFieldEnum]


  export const AnalyticsScalarFieldEnum: {
    id: 'id',
    chatbotId: 'chatbotId',
    userId: 'userId',
    action: 'action',
    timestamp: 'timestamp'
  };

  export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ChatbotOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type ChatbotOrderByRelevanceFieldEnum = (typeof ChatbotOrderByRelevanceFieldEnum)[keyof typeof ChatbotOrderByRelevanceFieldEnum]


  export const MessageOrderByRelevanceFieldEnum: {
    content: 'content',
    sender: 'sender'
  };

  export type MessageOrderByRelevanceFieldEnum = (typeof MessageOrderByRelevanceFieldEnum)[keyof typeof MessageOrderByRelevanceFieldEnum]


  export const IntegrationOrderByRelevanceFieldEnum: {
    type: 'type',
    token: 'token',
    config: 'config'
  };

  export type IntegrationOrderByRelevanceFieldEnum = (typeof IntegrationOrderByRelevanceFieldEnum)[keyof typeof IntegrationOrderByRelevanceFieldEnum]


  export const MessageTemplateOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type MessageTemplateOrderByRelevanceFieldEnum = (typeof MessageTemplateOrderByRelevanceFieldEnum)[keyof typeof MessageTemplateOrderByRelevanceFieldEnum]


  export const ChatbotCustomizationOrderByRelevanceFieldEnum: {
    name: 'name',
    avatar: 'avatar',
    greeting: 'greeting',
    personality: 'personality',
    tone: 'tone',
    language: 'language',
    config: 'config'
  };

  export type ChatbotCustomizationOrderByRelevanceFieldEnum = (typeof ChatbotCustomizationOrderByRelevanceFieldEnum)[keyof typeof ChatbotCustomizationOrderByRelevanceFieldEnum]


  export const FlowOrderByRelevanceFieldEnum: {
    name: 'name',
    steps: 'steps'
  };

  export type FlowOrderByRelevanceFieldEnum = (typeof FlowOrderByRelevanceFieldEnum)[keyof typeof FlowOrderByRelevanceFieldEnum]


  export const AnalyticsOrderByRelevanceFieldEnum: {
    action: 'action'
  };

  export type AnalyticsOrderByRelevanceFieldEnum = (typeof AnalyticsOrderByRelevanceFieldEnum)[keyof typeof AnalyticsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    chatbots?: ChatbotListRelationFilter
    integrations?: IntegrationListRelationFilter
    analytics?: AnalyticsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatbots?: ChatbotOrderByRelationAggregateInput
    integrations?: IntegrationOrderByRelationAggregateInput
    analytics?: AnalyticsOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    chatbots?: ChatbotListRelationFilter
    integrations?: IntegrationListRelationFilter
    analytics?: AnalyticsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatbotWhereInput = {
    AND?: ChatbotWhereInput | ChatbotWhereInput[]
    OR?: ChatbotWhereInput[]
    NOT?: ChatbotWhereInput | ChatbotWhereInput[]
    id?: IntFilter<"Chatbot"> | number
    name?: StringFilter<"Chatbot"> | string
    description?: StringNullableFilter<"Chatbot"> | string | null
    userId?: IntFilter<"Chatbot"> | number
    createdAt?: DateTimeFilter<"Chatbot"> | Date | string
    updatedAt?: DateTimeFilter<"Chatbot"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    conversations?: ConversationListRelationFilter
    integrations?: IntegrationListRelationFilter
    templates?: MessageTemplateListRelationFilter
    customization?: XOR<ChatbotCustomizationNullableScalarRelationFilter, ChatbotCustomizationWhereInput> | null
    flows?: FlowListRelationFilter
    analytics?: AnalyticsListRelationFilter
  }

  export type ChatbotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    conversations?: ConversationOrderByRelationAggregateInput
    integrations?: IntegrationOrderByRelationAggregateInput
    templates?: MessageTemplateOrderByRelationAggregateInput
    customization?: ChatbotCustomizationOrderByWithRelationInput
    flows?: FlowOrderByRelationAggregateInput
    analytics?: AnalyticsOrderByRelationAggregateInput
    _relevance?: ChatbotOrderByRelevanceInput
  }

  export type ChatbotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatbotWhereInput | ChatbotWhereInput[]
    OR?: ChatbotWhereInput[]
    NOT?: ChatbotWhereInput | ChatbotWhereInput[]
    name?: StringFilter<"Chatbot"> | string
    description?: StringNullableFilter<"Chatbot"> | string | null
    userId?: IntFilter<"Chatbot"> | number
    createdAt?: DateTimeFilter<"Chatbot"> | Date | string
    updatedAt?: DateTimeFilter<"Chatbot"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    conversations?: ConversationListRelationFilter
    integrations?: IntegrationListRelationFilter
    templates?: MessageTemplateListRelationFilter
    customization?: XOR<ChatbotCustomizationNullableScalarRelationFilter, ChatbotCustomizationWhereInput> | null
    flows?: FlowListRelationFilter
    analytics?: AnalyticsListRelationFilter
  }, "id">

  export type ChatbotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatbotCountOrderByAggregateInput
    _avg?: ChatbotAvgOrderByAggregateInput
    _max?: ChatbotMaxOrderByAggregateInput
    _min?: ChatbotMinOrderByAggregateInput
    _sum?: ChatbotSumOrderByAggregateInput
  }

  export type ChatbotScalarWhereWithAggregatesInput = {
    AND?: ChatbotScalarWhereWithAggregatesInput | ChatbotScalarWhereWithAggregatesInput[]
    OR?: ChatbotScalarWhereWithAggregatesInput[]
    NOT?: ChatbotScalarWhereWithAggregatesInput | ChatbotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chatbot"> | number
    name?: StringWithAggregatesFilter<"Chatbot"> | string
    description?: StringNullableWithAggregatesFilter<"Chatbot"> | string | null
    userId?: IntWithAggregatesFilter<"Chatbot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Chatbot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chatbot"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: IntFilter<"Conversation"> | number
    chatbotId?: IntFilter<"Conversation"> | number
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    chatbot?: XOR<ChatbotScalarRelationFilter, ChatbotWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatbot?: ChatbotOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    chatbotId?: IntFilter<"Conversation"> | number
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    chatbot?: XOR<ChatbotScalarRelationFilter, ChatbotWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversation"> | number
    chatbotId?: IntWithAggregatesFilter<"Conversation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    sender?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    sender?: SortOrder
    createdAt?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
    _relevance?: MessageOrderByRelevanceInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversationId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    sender?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    sender?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    conversationId?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    sender?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type IntegrationWhereInput = {
    AND?: IntegrationWhereInput | IntegrationWhereInput[]
    OR?: IntegrationWhereInput[]
    NOT?: IntegrationWhereInput | IntegrationWhereInput[]
    id?: IntFilter<"Integration"> | number
    userId?: IntFilter<"Integration"> | number
    type?: StringFilter<"Integration"> | string
    token?: StringNullableFilter<"Integration"> | string | null
    config?: StringNullableFilter<"Integration"> | string | null
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    chatbotId?: IntNullableFilter<"Integration"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatbot?: XOR<ChatbotNullableScalarRelationFilter, ChatbotWhereInput> | null
  }

  export type IntegrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    token?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatbotId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    chatbot?: ChatbotOrderByWithRelationInput
    _relevance?: IntegrationOrderByRelevanceInput
  }

  export type IntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IntegrationWhereInput | IntegrationWhereInput[]
    OR?: IntegrationWhereInput[]
    NOT?: IntegrationWhereInput | IntegrationWhereInput[]
    userId?: IntFilter<"Integration"> | number
    type?: StringFilter<"Integration"> | string
    token?: StringNullableFilter<"Integration"> | string | null
    config?: StringNullableFilter<"Integration"> | string | null
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    chatbotId?: IntNullableFilter<"Integration"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatbot?: XOR<ChatbotNullableScalarRelationFilter, ChatbotWhereInput> | null
  }, "id">

  export type IntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    token?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatbotId?: SortOrderInput | SortOrder
    _count?: IntegrationCountOrderByAggregateInput
    _avg?: IntegrationAvgOrderByAggregateInput
    _max?: IntegrationMaxOrderByAggregateInput
    _min?: IntegrationMinOrderByAggregateInput
    _sum?: IntegrationSumOrderByAggregateInput
  }

  export type IntegrationScalarWhereWithAggregatesInput = {
    AND?: IntegrationScalarWhereWithAggregatesInput | IntegrationScalarWhereWithAggregatesInput[]
    OR?: IntegrationScalarWhereWithAggregatesInput[]
    NOT?: IntegrationScalarWhereWithAggregatesInput | IntegrationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Integration"> | number
    userId?: IntWithAggregatesFilter<"Integration"> | number
    type?: StringWithAggregatesFilter<"Integration"> | string
    token?: StringNullableWithAggregatesFilter<"Integration"> | string | null
    config?: StringNullableWithAggregatesFilter<"Integration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Integration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Integration"> | Date | string
    chatbotId?: IntNullableWithAggregatesFilter<"Integration"> | number | null
  }

  export type MessageTemplateWhereInput = {
    AND?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    OR?: MessageTemplateWhereInput[]
    NOT?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    id?: IntFilter<"MessageTemplate"> | number
    chatbotId?: IntFilter<"MessageTemplate"> | number
    title?: StringFilter<"MessageTemplate"> | string
    content?: StringFilter<"MessageTemplate"> | string
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    chatbot?: XOR<ChatbotScalarRelationFilter, ChatbotWhereInput>
  }

  export type MessageTemplateOrderByWithRelationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatbot?: ChatbotOrderByWithRelationInput
    _relevance?: MessageTemplateOrderByRelevanceInput
  }

  export type MessageTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    OR?: MessageTemplateWhereInput[]
    NOT?: MessageTemplateWhereInput | MessageTemplateWhereInput[]
    chatbotId?: IntFilter<"MessageTemplate"> | number
    title?: StringFilter<"MessageTemplate"> | string
    content?: StringFilter<"MessageTemplate"> | string
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    chatbot?: XOR<ChatbotScalarRelationFilter, ChatbotWhereInput>
  }, "id">

  export type MessageTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageTemplateCountOrderByAggregateInput
    _avg?: MessageTemplateAvgOrderByAggregateInput
    _max?: MessageTemplateMaxOrderByAggregateInput
    _min?: MessageTemplateMinOrderByAggregateInput
    _sum?: MessageTemplateSumOrderByAggregateInput
  }

  export type MessageTemplateScalarWhereWithAggregatesInput = {
    AND?: MessageTemplateScalarWhereWithAggregatesInput | MessageTemplateScalarWhereWithAggregatesInput[]
    OR?: MessageTemplateScalarWhereWithAggregatesInput[]
    NOT?: MessageTemplateScalarWhereWithAggregatesInput | MessageTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MessageTemplate"> | number
    chatbotId?: IntWithAggregatesFilter<"MessageTemplate"> | number
    title?: StringWithAggregatesFilter<"MessageTemplate"> | string
    content?: StringWithAggregatesFilter<"MessageTemplate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageTemplate"> | Date | string
  }

  export type ChatbotCustomizationWhereInput = {
    AND?: ChatbotCustomizationWhereInput | ChatbotCustomizationWhereInput[]
    OR?: ChatbotCustomizationWhereInput[]
    NOT?: ChatbotCustomizationWhereInput | ChatbotCustomizationWhereInput[]
    id?: IntFilter<"ChatbotCustomization"> | number
    chatbotId?: IntFilter<"ChatbotCustomization"> | number
    name?: StringNullableFilter<"ChatbotCustomization"> | string | null
    avatar?: StringNullableFilter<"ChatbotCustomization"> | string | null
    greeting?: StringNullableFilter<"ChatbotCustomization"> | string | null
    personality?: StringNullableFilter<"ChatbotCustomization"> | string | null
    tone?: StringNullableFilter<"ChatbotCustomization"> | string | null
    language?: StringNullableFilter<"ChatbotCustomization"> | string | null
    config?: StringFilter<"ChatbotCustomization"> | string
    createdAt?: DateTimeFilter<"ChatbotCustomization"> | Date | string
    updatedAt?: DateTimeFilter<"ChatbotCustomization"> | Date | string
    chatbot?: XOR<ChatbotScalarRelationFilter, ChatbotWhereInput>
  }

  export type ChatbotCustomizationOrderByWithRelationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    greeting?: SortOrderInput | SortOrder
    personality?: SortOrderInput | SortOrder
    tone?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatbot?: ChatbotOrderByWithRelationInput
    _relevance?: ChatbotCustomizationOrderByRelevanceInput
  }

  export type ChatbotCustomizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chatbotId?: number
    AND?: ChatbotCustomizationWhereInput | ChatbotCustomizationWhereInput[]
    OR?: ChatbotCustomizationWhereInput[]
    NOT?: ChatbotCustomizationWhereInput | ChatbotCustomizationWhereInput[]
    name?: StringNullableFilter<"ChatbotCustomization"> | string | null
    avatar?: StringNullableFilter<"ChatbotCustomization"> | string | null
    greeting?: StringNullableFilter<"ChatbotCustomization"> | string | null
    personality?: StringNullableFilter<"ChatbotCustomization"> | string | null
    tone?: StringNullableFilter<"ChatbotCustomization"> | string | null
    language?: StringNullableFilter<"ChatbotCustomization"> | string | null
    config?: StringFilter<"ChatbotCustomization"> | string
    createdAt?: DateTimeFilter<"ChatbotCustomization"> | Date | string
    updatedAt?: DateTimeFilter<"ChatbotCustomization"> | Date | string
    chatbot?: XOR<ChatbotScalarRelationFilter, ChatbotWhereInput>
  }, "id" | "chatbotId">

  export type ChatbotCustomizationOrderByWithAggregationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    greeting?: SortOrderInput | SortOrder
    personality?: SortOrderInput | SortOrder
    tone?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatbotCustomizationCountOrderByAggregateInput
    _avg?: ChatbotCustomizationAvgOrderByAggregateInput
    _max?: ChatbotCustomizationMaxOrderByAggregateInput
    _min?: ChatbotCustomizationMinOrderByAggregateInput
    _sum?: ChatbotCustomizationSumOrderByAggregateInput
  }

  export type ChatbotCustomizationScalarWhereWithAggregatesInput = {
    AND?: ChatbotCustomizationScalarWhereWithAggregatesInput | ChatbotCustomizationScalarWhereWithAggregatesInput[]
    OR?: ChatbotCustomizationScalarWhereWithAggregatesInput[]
    NOT?: ChatbotCustomizationScalarWhereWithAggregatesInput | ChatbotCustomizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatbotCustomization"> | number
    chatbotId?: IntWithAggregatesFilter<"ChatbotCustomization"> | number
    name?: StringNullableWithAggregatesFilter<"ChatbotCustomization"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"ChatbotCustomization"> | string | null
    greeting?: StringNullableWithAggregatesFilter<"ChatbotCustomization"> | string | null
    personality?: StringNullableWithAggregatesFilter<"ChatbotCustomization"> | string | null
    tone?: StringNullableWithAggregatesFilter<"ChatbotCustomization"> | string | null
    language?: StringNullableWithAggregatesFilter<"ChatbotCustomization"> | string | null
    config?: StringWithAggregatesFilter<"ChatbotCustomization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatbotCustomization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatbotCustomization"> | Date | string
  }

  export type FlowWhereInput = {
    AND?: FlowWhereInput | FlowWhereInput[]
    OR?: FlowWhereInput[]
    NOT?: FlowWhereInput | FlowWhereInput[]
    id?: IntFilter<"Flow"> | number
    chatbotId?: IntFilter<"Flow"> | number
    name?: StringFilter<"Flow"> | string
    steps?: StringFilter<"Flow"> | string
    createdAt?: DateTimeFilter<"Flow"> | Date | string
    updatedAt?: DateTimeFilter<"Flow"> | Date | string
    chatbot?: XOR<ChatbotScalarRelationFilter, ChatbotWhereInput>
  }

  export type FlowOrderByWithRelationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    name?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatbot?: ChatbotOrderByWithRelationInput
    _relevance?: FlowOrderByRelevanceInput
  }

  export type FlowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlowWhereInput | FlowWhereInput[]
    OR?: FlowWhereInput[]
    NOT?: FlowWhereInput | FlowWhereInput[]
    chatbotId?: IntFilter<"Flow"> | number
    name?: StringFilter<"Flow"> | string
    steps?: StringFilter<"Flow"> | string
    createdAt?: DateTimeFilter<"Flow"> | Date | string
    updatedAt?: DateTimeFilter<"Flow"> | Date | string
    chatbot?: XOR<ChatbotScalarRelationFilter, ChatbotWhereInput>
  }, "id">

  export type FlowOrderByWithAggregationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    name?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlowCountOrderByAggregateInput
    _avg?: FlowAvgOrderByAggregateInput
    _max?: FlowMaxOrderByAggregateInput
    _min?: FlowMinOrderByAggregateInput
    _sum?: FlowSumOrderByAggregateInput
  }

  export type FlowScalarWhereWithAggregatesInput = {
    AND?: FlowScalarWhereWithAggregatesInput | FlowScalarWhereWithAggregatesInput[]
    OR?: FlowScalarWhereWithAggregatesInput[]
    NOT?: FlowScalarWhereWithAggregatesInput | FlowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Flow"> | number
    chatbotId?: IntWithAggregatesFilter<"Flow"> | number
    name?: StringWithAggregatesFilter<"Flow"> | string
    steps?: StringWithAggregatesFilter<"Flow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Flow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flow"> | Date | string
  }

  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    id?: IntFilter<"Analytics"> | number
    chatbotId?: IntFilter<"Analytics"> | number
    userId?: IntNullableFilter<"Analytics"> | number | null
    action?: StringFilter<"Analytics"> | string
    timestamp?: DateTimeFilter<"Analytics"> | Date | string
    chatbot?: XOR<ChatbotScalarRelationFilter, ChatbotWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    chatbot?: ChatbotOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: AnalyticsOrderByRelevanceInput
  }

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    chatbotId?: IntFilter<"Analytics"> | number
    userId?: IntNullableFilter<"Analytics"> | number | null
    action?: StringFilter<"Analytics"> | string
    timestamp?: DateTimeFilter<"Analytics"> | Date | string
    chatbot?: XOR<ChatbotScalarRelationFilter, ChatbotWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    _count?: AnalyticsCountOrderByAggregateInput
    _avg?: AnalyticsAvgOrderByAggregateInput
    _max?: AnalyticsMaxOrderByAggregateInput
    _min?: AnalyticsMinOrderByAggregateInput
    _sum?: AnalyticsSumOrderByAggregateInput
  }

  export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    OR?: AnalyticsScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Analytics"> | number
    chatbotId?: IntWithAggregatesFilter<"Analytics"> | number
    userId?: IntNullableWithAggregatesFilter<"Analytics"> | number | null
    action?: StringWithAggregatesFilter<"Analytics"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbots?: ChatbotCreateNestedManyWithoutUserInput
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbots?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbots?: ChatbotUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbots?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatbotsInput
    conversations?: ConversationCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationCreateNestedOneWithoutChatbotInput
    flows?: FlowCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationUncheckedCreateNestedOneWithoutChatbotInput
    flows?: FlowUncheckedCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatbotsNestedInput
    conversations?: ConversationUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUpdateOneWithoutChatbotNestedInput
    flows?: FlowUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUncheckedUpdateOneWithoutChatbotNestedInput
    flows?: FlowUncheckedUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbot: ChatbotCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: number
    chatbotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbot?: ChatbotUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: number
    chatbotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    content: string
    sender: string
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    conversationId: number
    content: string
    sender: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    conversationId: number
    content: string
    sender: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationCreateInput = {
    type: string
    token?: string | null
    config?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIntegrationsInput
    chatbot?: ChatbotCreateNestedOneWithoutIntegrationsInput
  }

  export type IntegrationUncheckedCreateInput = {
    id?: number
    userId: number
    type: string
    token?: string | null
    config?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbotId?: number | null
  }

  export type IntegrationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIntegrationsNestedInput
    chatbot?: ChatbotUpdateOneWithoutIntegrationsNestedInput
  }

  export type IntegrationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbotId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntegrationCreateManyInput = {
    id?: number
    userId: number
    type: string
    token?: string | null
    config?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbotId?: number | null
  }

  export type IntegrationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbotId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessageTemplateCreateInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbot: ChatbotCreateNestedOneWithoutTemplatesInput
  }

  export type MessageTemplateUncheckedCreateInput = {
    id?: number
    chatbotId: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageTemplateUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbot?: ChatbotUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type MessageTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageTemplateCreateManyInput = {
    id?: number
    chatbotId: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageTemplateUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotCustomizationCreateInput = {
    name?: string | null
    avatar?: string | null
    greeting?: string | null
    personality?: string | null
    tone?: string | null
    language?: string | null
    config: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbot: ChatbotCreateNestedOneWithoutCustomizationInput
  }

  export type ChatbotCustomizationUncheckedCreateInput = {
    id?: number
    chatbotId: number
    name?: string | null
    avatar?: string | null
    greeting?: string | null
    personality?: string | null
    tone?: string | null
    language?: string | null
    config: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotCustomizationUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    greeting?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbot?: ChatbotUpdateOneRequiredWithoutCustomizationNestedInput
  }

  export type ChatbotCustomizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    greeting?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotCustomizationCreateManyInput = {
    id?: number
    chatbotId: number
    name?: string | null
    avatar?: string | null
    greeting?: string | null
    personality?: string | null
    tone?: string | null
    language?: string | null
    config: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotCustomizationUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    greeting?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotCustomizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    greeting?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCreateInput = {
    name: string
    steps: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbot: ChatbotCreateNestedOneWithoutFlowsInput
  }

  export type FlowUncheckedCreateInput = {
    id?: number
    chatbotId: number
    name: string
    steps: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbot?: ChatbotUpdateOneRequiredWithoutFlowsNestedInput
  }

  export type FlowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCreateManyInput = {
    id?: number
    chatbotId: number
    name: string
    steps: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateInput = {
    action: string
    timestamp?: Date | string
    chatbot: ChatbotCreateNestedOneWithoutAnalyticsInput
    user?: UserCreateNestedOneWithoutAnalyticsInput
  }

  export type AnalyticsUncheckedCreateInput = {
    id?: number
    chatbotId: number
    userId?: number | null
    action: string
    timestamp?: Date | string
  }

  export type AnalyticsUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbot?: ChatbotUpdateOneRequiredWithoutAnalyticsNestedInput
    user?: UserUpdateOneWithoutAnalyticsNestedInput
  }

  export type AnalyticsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateManyInput = {
    id?: number
    chatbotId: number
    userId?: number | null
    action: string
    timestamp?: Date | string
  }

  export type AnalyticsUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChatbotListRelationFilter = {
    every?: ChatbotWhereInput
    some?: ChatbotWhereInput
    none?: ChatbotWhereInput
  }

  export type IntegrationListRelationFilter = {
    every?: IntegrationWhereInput
    some?: IntegrationWhereInput
    none?: IntegrationWhereInput
  }

  export type AnalyticsListRelationFilter = {
    every?: AnalyticsWhereInput
    some?: AnalyticsWhereInput
    none?: AnalyticsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatbotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntegrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type MessageTemplateListRelationFilter = {
    every?: MessageTemplateWhereInput
    some?: MessageTemplateWhereInput
    none?: MessageTemplateWhereInput
  }

  export type ChatbotCustomizationNullableScalarRelationFilter = {
    is?: ChatbotCustomizationWhereInput | null
    isNot?: ChatbotCustomizationWhereInput | null
  }

  export type FlowListRelationFilter = {
    every?: FlowWhereInput
    some?: FlowWhereInput
    none?: FlowWhereInput
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatbotOrderByRelevanceInput = {
    fields: ChatbotOrderByRelevanceFieldEnum | ChatbotOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatbotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChatbotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChatbotScalarRelationFilter = {
    is?: ChatbotWhereInput
    isNot?: ChatbotWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageOrderByRelevanceInput = {
    fields: MessageOrderByRelevanceFieldEnum | MessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    sender?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    sender?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    content?: SortOrder
    sender?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ChatbotNullableScalarRelationFilter = {
    is?: ChatbotWhereInput | null
    isNot?: ChatbotWhereInput | null
  }

  export type IntegrationOrderByRelevanceInput = {
    fields: IntegrationOrderByRelevanceFieldEnum | IntegrationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    token?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatbotId?: SortOrder
  }

  export type IntegrationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatbotId?: SortOrder
  }

  export type IntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    token?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatbotId?: SortOrder
  }

  export type IntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    token?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatbotId?: SortOrder
  }

  export type IntegrationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatbotId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MessageTemplateOrderByRelevanceInput = {
    fields: MessageTemplateOrderByRelevanceFieldEnum | MessageTemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MessageTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
  }

  export type MessageTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageTemplateSumOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
  }

  export type ChatbotCustomizationOrderByRelevanceInput = {
    fields: ChatbotCustomizationOrderByRelevanceFieldEnum | ChatbotCustomizationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatbotCustomizationCountOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    greeting?: SortOrder
    personality?: SortOrder
    tone?: SortOrder
    language?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotCustomizationAvgOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
  }

  export type ChatbotCustomizationMaxOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    greeting?: SortOrder
    personality?: SortOrder
    tone?: SortOrder
    language?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotCustomizationMinOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    greeting?: SortOrder
    personality?: SortOrder
    tone?: SortOrder
    language?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotCustomizationSumOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
  }

  export type FlowOrderByRelevanceInput = {
    fields: FlowOrderByRelevanceFieldEnum | FlowOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FlowCountOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    name?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowAvgOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
  }

  export type FlowMaxOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    name?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowMinOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    name?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowSumOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AnalyticsOrderByRelevanceInput = {
    fields: AnalyticsOrderByRelevanceFieldEnum | AnalyticsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsAvgOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrder
  }

  export type AnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsSumOrderByAggregateInput = {
    id?: SortOrder
    chatbotId?: SortOrder
    userId?: SortOrder
  }

  export type ChatbotCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput> | ChatbotCreateWithoutUserInput[] | ChatbotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotCreateOrConnectWithoutUserInput | ChatbotCreateOrConnectWithoutUserInput[]
    createMany?: ChatbotCreateManyUserInputEnvelope
    connect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
  }

  export type IntegrationCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type AnalyticsCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type ChatbotUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput> | ChatbotCreateWithoutUserInput[] | ChatbotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotCreateOrConnectWithoutUserInput | ChatbotCreateOrConnectWithoutUserInput[]
    createMany?: ChatbotCreateManyUserInputEnvelope
    connect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
  }

  export type IntegrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type AnalyticsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatbotUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput> | ChatbotCreateWithoutUserInput[] | ChatbotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotCreateOrConnectWithoutUserInput | ChatbotCreateOrConnectWithoutUserInput[]
    upsert?: ChatbotUpsertWithWhereUniqueWithoutUserInput | ChatbotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatbotCreateManyUserInputEnvelope
    set?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    disconnect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    delete?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    connect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    update?: ChatbotUpdateWithWhereUniqueWithoutUserInput | ChatbotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatbotUpdateManyWithWhereWithoutUserInput | ChatbotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatbotScalarWhereInput | ChatbotScalarWhereInput[]
  }

  export type IntegrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutUserInput | IntegrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutUserInput | IntegrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutUserInput | IntegrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type AnalyticsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutUserInput | AnalyticsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutUserInput | AnalyticsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutUserInput | AnalyticsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatbotUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput> | ChatbotCreateWithoutUserInput[] | ChatbotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotCreateOrConnectWithoutUserInput | ChatbotCreateOrConnectWithoutUserInput[]
    upsert?: ChatbotUpsertWithWhereUniqueWithoutUserInput | ChatbotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatbotCreateManyUserInputEnvelope
    set?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    disconnect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    delete?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    connect?: ChatbotWhereUniqueInput | ChatbotWhereUniqueInput[]
    update?: ChatbotUpdateWithWhereUniqueWithoutUserInput | ChatbotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatbotUpdateManyWithWhereWithoutUserInput | ChatbotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatbotScalarWhereInput | ChatbotScalarWhereInput[]
  }

  export type IntegrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutUserInput | IntegrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutUserInput | IntegrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutUserInput | IntegrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type AnalyticsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput> | AnalyticsCreateWithoutUserInput[] | AnalyticsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutUserInput | AnalyticsCreateOrConnectWithoutUserInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutUserInput | AnalyticsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalyticsCreateManyUserInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutUserInput | AnalyticsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutUserInput | AnalyticsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatbotsInput = {
    create?: XOR<UserCreateWithoutChatbotsInput, UserUncheckedCreateWithoutChatbotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatbotsInput
    connect?: UserWhereUniqueInput
  }

  export type ConversationCreateNestedManyWithoutChatbotInput = {
    create?: XOR<ConversationCreateWithoutChatbotInput, ConversationUncheckedCreateWithoutChatbotInput> | ConversationCreateWithoutChatbotInput[] | ConversationUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutChatbotInput | ConversationCreateOrConnectWithoutChatbotInput[]
    createMany?: ConversationCreateManyChatbotInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type IntegrationCreateNestedManyWithoutChatbotInput = {
    create?: XOR<IntegrationCreateWithoutChatbotInput, IntegrationUncheckedCreateWithoutChatbotInput> | IntegrationCreateWithoutChatbotInput[] | IntegrationUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutChatbotInput | IntegrationCreateOrConnectWithoutChatbotInput[]
    createMany?: IntegrationCreateManyChatbotInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type MessageTemplateCreateNestedManyWithoutChatbotInput = {
    create?: XOR<MessageTemplateCreateWithoutChatbotInput, MessageTemplateUncheckedCreateWithoutChatbotInput> | MessageTemplateCreateWithoutChatbotInput[] | MessageTemplateUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutChatbotInput | MessageTemplateCreateOrConnectWithoutChatbotInput[]
    createMany?: MessageTemplateCreateManyChatbotInputEnvelope
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
  }

  export type ChatbotCustomizationCreateNestedOneWithoutChatbotInput = {
    create?: XOR<ChatbotCustomizationCreateWithoutChatbotInput, ChatbotCustomizationUncheckedCreateWithoutChatbotInput>
    connectOrCreate?: ChatbotCustomizationCreateOrConnectWithoutChatbotInput
    connect?: ChatbotCustomizationWhereUniqueInput
  }

  export type FlowCreateNestedManyWithoutChatbotInput = {
    create?: XOR<FlowCreateWithoutChatbotInput, FlowUncheckedCreateWithoutChatbotInput> | FlowCreateWithoutChatbotInput[] | FlowUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutChatbotInput | FlowCreateOrConnectWithoutChatbotInput[]
    createMany?: FlowCreateManyChatbotInputEnvelope
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
  }

  export type AnalyticsCreateNestedManyWithoutChatbotInput = {
    create?: XOR<AnalyticsCreateWithoutChatbotInput, AnalyticsUncheckedCreateWithoutChatbotInput> | AnalyticsCreateWithoutChatbotInput[] | AnalyticsUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutChatbotInput | AnalyticsCreateOrConnectWithoutChatbotInput[]
    createMany?: AnalyticsCreateManyChatbotInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutChatbotInput = {
    create?: XOR<ConversationCreateWithoutChatbotInput, ConversationUncheckedCreateWithoutChatbotInput> | ConversationCreateWithoutChatbotInput[] | ConversationUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutChatbotInput | ConversationCreateOrConnectWithoutChatbotInput[]
    createMany?: ConversationCreateManyChatbotInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type IntegrationUncheckedCreateNestedManyWithoutChatbotInput = {
    create?: XOR<IntegrationCreateWithoutChatbotInput, IntegrationUncheckedCreateWithoutChatbotInput> | IntegrationCreateWithoutChatbotInput[] | IntegrationUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutChatbotInput | IntegrationCreateOrConnectWithoutChatbotInput[]
    createMany?: IntegrationCreateManyChatbotInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type MessageTemplateUncheckedCreateNestedManyWithoutChatbotInput = {
    create?: XOR<MessageTemplateCreateWithoutChatbotInput, MessageTemplateUncheckedCreateWithoutChatbotInput> | MessageTemplateCreateWithoutChatbotInput[] | MessageTemplateUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutChatbotInput | MessageTemplateCreateOrConnectWithoutChatbotInput[]
    createMany?: MessageTemplateCreateManyChatbotInputEnvelope
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
  }

  export type ChatbotCustomizationUncheckedCreateNestedOneWithoutChatbotInput = {
    create?: XOR<ChatbotCustomizationCreateWithoutChatbotInput, ChatbotCustomizationUncheckedCreateWithoutChatbotInput>
    connectOrCreate?: ChatbotCustomizationCreateOrConnectWithoutChatbotInput
    connect?: ChatbotCustomizationWhereUniqueInput
  }

  export type FlowUncheckedCreateNestedManyWithoutChatbotInput = {
    create?: XOR<FlowCreateWithoutChatbotInput, FlowUncheckedCreateWithoutChatbotInput> | FlowCreateWithoutChatbotInput[] | FlowUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutChatbotInput | FlowCreateOrConnectWithoutChatbotInput[]
    createMany?: FlowCreateManyChatbotInputEnvelope
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
  }

  export type AnalyticsUncheckedCreateNestedManyWithoutChatbotInput = {
    create?: XOR<AnalyticsCreateWithoutChatbotInput, AnalyticsUncheckedCreateWithoutChatbotInput> | AnalyticsCreateWithoutChatbotInput[] | AnalyticsUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutChatbotInput | AnalyticsCreateOrConnectWithoutChatbotInput[]
    createMany?: AnalyticsCreateManyChatbotInputEnvelope
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChatbotsNestedInput = {
    create?: XOR<UserCreateWithoutChatbotsInput, UserUncheckedCreateWithoutChatbotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatbotsInput
    upsert?: UserUpsertWithoutChatbotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatbotsInput, UserUpdateWithoutChatbotsInput>, UserUncheckedUpdateWithoutChatbotsInput>
  }

  export type ConversationUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<ConversationCreateWithoutChatbotInput, ConversationUncheckedCreateWithoutChatbotInput> | ConversationCreateWithoutChatbotInput[] | ConversationUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutChatbotInput | ConversationCreateOrConnectWithoutChatbotInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutChatbotInput | ConversationUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: ConversationCreateManyChatbotInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutChatbotInput | ConversationUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutChatbotInput | ConversationUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type IntegrationUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<IntegrationCreateWithoutChatbotInput, IntegrationUncheckedCreateWithoutChatbotInput> | IntegrationCreateWithoutChatbotInput[] | IntegrationUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutChatbotInput | IntegrationCreateOrConnectWithoutChatbotInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutChatbotInput | IntegrationUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: IntegrationCreateManyChatbotInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutChatbotInput | IntegrationUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutChatbotInput | IntegrationUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type MessageTemplateUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<MessageTemplateCreateWithoutChatbotInput, MessageTemplateUncheckedCreateWithoutChatbotInput> | MessageTemplateCreateWithoutChatbotInput[] | MessageTemplateUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutChatbotInput | MessageTemplateCreateOrConnectWithoutChatbotInput[]
    upsert?: MessageTemplateUpsertWithWhereUniqueWithoutChatbotInput | MessageTemplateUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: MessageTemplateCreateManyChatbotInputEnvelope
    set?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    disconnect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    delete?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    update?: MessageTemplateUpdateWithWhereUniqueWithoutChatbotInput | MessageTemplateUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: MessageTemplateUpdateManyWithWhereWithoutChatbotInput | MessageTemplateUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
  }

  export type ChatbotCustomizationUpdateOneWithoutChatbotNestedInput = {
    create?: XOR<ChatbotCustomizationCreateWithoutChatbotInput, ChatbotCustomizationUncheckedCreateWithoutChatbotInput>
    connectOrCreate?: ChatbotCustomizationCreateOrConnectWithoutChatbotInput
    upsert?: ChatbotCustomizationUpsertWithoutChatbotInput
    disconnect?: ChatbotCustomizationWhereInput | boolean
    delete?: ChatbotCustomizationWhereInput | boolean
    connect?: ChatbotCustomizationWhereUniqueInput
    update?: XOR<XOR<ChatbotCustomizationUpdateToOneWithWhereWithoutChatbotInput, ChatbotCustomizationUpdateWithoutChatbotInput>, ChatbotCustomizationUncheckedUpdateWithoutChatbotInput>
  }

  export type FlowUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<FlowCreateWithoutChatbotInput, FlowUncheckedCreateWithoutChatbotInput> | FlowCreateWithoutChatbotInput[] | FlowUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutChatbotInput | FlowCreateOrConnectWithoutChatbotInput[]
    upsert?: FlowUpsertWithWhereUniqueWithoutChatbotInput | FlowUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: FlowCreateManyChatbotInputEnvelope
    set?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    disconnect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    delete?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    update?: FlowUpdateWithWhereUniqueWithoutChatbotInput | FlowUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: FlowUpdateManyWithWhereWithoutChatbotInput | FlowUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: FlowScalarWhereInput | FlowScalarWhereInput[]
  }

  export type AnalyticsUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<AnalyticsCreateWithoutChatbotInput, AnalyticsUncheckedCreateWithoutChatbotInput> | AnalyticsCreateWithoutChatbotInput[] | AnalyticsUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutChatbotInput | AnalyticsCreateOrConnectWithoutChatbotInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutChatbotInput | AnalyticsUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: AnalyticsCreateManyChatbotInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutChatbotInput | AnalyticsUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutChatbotInput | AnalyticsUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<ConversationCreateWithoutChatbotInput, ConversationUncheckedCreateWithoutChatbotInput> | ConversationCreateWithoutChatbotInput[] | ConversationUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutChatbotInput | ConversationCreateOrConnectWithoutChatbotInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutChatbotInput | ConversationUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: ConversationCreateManyChatbotInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutChatbotInput | ConversationUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutChatbotInput | ConversationUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type IntegrationUncheckedUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<IntegrationCreateWithoutChatbotInput, IntegrationUncheckedCreateWithoutChatbotInput> | IntegrationCreateWithoutChatbotInput[] | IntegrationUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutChatbotInput | IntegrationCreateOrConnectWithoutChatbotInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutChatbotInput | IntegrationUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: IntegrationCreateManyChatbotInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutChatbotInput | IntegrationUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutChatbotInput | IntegrationUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type MessageTemplateUncheckedUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<MessageTemplateCreateWithoutChatbotInput, MessageTemplateUncheckedCreateWithoutChatbotInput> | MessageTemplateCreateWithoutChatbotInput[] | MessageTemplateUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: MessageTemplateCreateOrConnectWithoutChatbotInput | MessageTemplateCreateOrConnectWithoutChatbotInput[]
    upsert?: MessageTemplateUpsertWithWhereUniqueWithoutChatbotInput | MessageTemplateUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: MessageTemplateCreateManyChatbotInputEnvelope
    set?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    disconnect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    delete?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    connect?: MessageTemplateWhereUniqueInput | MessageTemplateWhereUniqueInput[]
    update?: MessageTemplateUpdateWithWhereUniqueWithoutChatbotInput | MessageTemplateUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: MessageTemplateUpdateManyWithWhereWithoutChatbotInput | MessageTemplateUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
  }

  export type ChatbotCustomizationUncheckedUpdateOneWithoutChatbotNestedInput = {
    create?: XOR<ChatbotCustomizationCreateWithoutChatbotInput, ChatbotCustomizationUncheckedCreateWithoutChatbotInput>
    connectOrCreate?: ChatbotCustomizationCreateOrConnectWithoutChatbotInput
    upsert?: ChatbotCustomizationUpsertWithoutChatbotInput
    disconnect?: ChatbotCustomizationWhereInput | boolean
    delete?: ChatbotCustomizationWhereInput | boolean
    connect?: ChatbotCustomizationWhereUniqueInput
    update?: XOR<XOR<ChatbotCustomizationUpdateToOneWithWhereWithoutChatbotInput, ChatbotCustomizationUpdateWithoutChatbotInput>, ChatbotCustomizationUncheckedUpdateWithoutChatbotInput>
  }

  export type FlowUncheckedUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<FlowCreateWithoutChatbotInput, FlowUncheckedCreateWithoutChatbotInput> | FlowCreateWithoutChatbotInput[] | FlowUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutChatbotInput | FlowCreateOrConnectWithoutChatbotInput[]
    upsert?: FlowUpsertWithWhereUniqueWithoutChatbotInput | FlowUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: FlowCreateManyChatbotInputEnvelope
    set?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    disconnect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    delete?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    update?: FlowUpdateWithWhereUniqueWithoutChatbotInput | FlowUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: FlowUpdateManyWithWhereWithoutChatbotInput | FlowUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: FlowScalarWhereInput | FlowScalarWhereInput[]
  }

  export type AnalyticsUncheckedUpdateManyWithoutChatbotNestedInput = {
    create?: XOR<AnalyticsCreateWithoutChatbotInput, AnalyticsUncheckedCreateWithoutChatbotInput> | AnalyticsCreateWithoutChatbotInput[] | AnalyticsUncheckedCreateWithoutChatbotInput[]
    connectOrCreate?: AnalyticsCreateOrConnectWithoutChatbotInput | AnalyticsCreateOrConnectWithoutChatbotInput[]
    upsert?: AnalyticsUpsertWithWhereUniqueWithoutChatbotInput | AnalyticsUpsertWithWhereUniqueWithoutChatbotInput[]
    createMany?: AnalyticsCreateManyChatbotInputEnvelope
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[]
    update?: AnalyticsUpdateWithWhereUniqueWithoutChatbotInput | AnalyticsUpdateWithWhereUniqueWithoutChatbotInput[]
    updateMany?: AnalyticsUpdateManyWithWhereWithoutChatbotInput | AnalyticsUpdateManyWithWhereWithoutChatbotInput[]
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
  }

  export type ChatbotCreateNestedOneWithoutConversationsInput = {
    create?: XOR<ChatbotCreateWithoutConversationsInput, ChatbotUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutConversationsInput
    connect?: ChatbotWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatbotUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<ChatbotCreateWithoutConversationsInput, ChatbotUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutConversationsInput
    upsert?: ChatbotUpsertWithoutConversationsInput
    connect?: ChatbotWhereUniqueInput
    update?: XOR<XOR<ChatbotUpdateToOneWithWhereWithoutConversationsInput, ChatbotUpdateWithoutConversationsInput>, ChatbotUncheckedUpdateWithoutConversationsInput>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatbotCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<ChatbotCreateWithoutIntegrationsInput, ChatbotUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutIntegrationsInput
    connect?: ChatbotWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutIntegrationsNestedInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    upsert?: UserUpsertWithoutIntegrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIntegrationsInput, UserUpdateWithoutIntegrationsInput>, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type ChatbotUpdateOneWithoutIntegrationsNestedInput = {
    create?: XOR<ChatbotCreateWithoutIntegrationsInput, ChatbotUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutIntegrationsInput
    upsert?: ChatbotUpsertWithoutIntegrationsInput
    disconnect?: ChatbotWhereInput | boolean
    delete?: ChatbotWhereInput | boolean
    connect?: ChatbotWhereUniqueInput
    update?: XOR<XOR<ChatbotUpdateToOneWithWhereWithoutIntegrationsInput, ChatbotUpdateWithoutIntegrationsInput>, ChatbotUncheckedUpdateWithoutIntegrationsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatbotCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<ChatbotCreateWithoutTemplatesInput, ChatbotUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutTemplatesInput
    connect?: ChatbotWhereUniqueInput
  }

  export type ChatbotUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<ChatbotCreateWithoutTemplatesInput, ChatbotUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutTemplatesInput
    upsert?: ChatbotUpsertWithoutTemplatesInput
    connect?: ChatbotWhereUniqueInput
    update?: XOR<XOR<ChatbotUpdateToOneWithWhereWithoutTemplatesInput, ChatbotUpdateWithoutTemplatesInput>, ChatbotUncheckedUpdateWithoutTemplatesInput>
  }

  export type ChatbotCreateNestedOneWithoutCustomizationInput = {
    create?: XOR<ChatbotCreateWithoutCustomizationInput, ChatbotUncheckedCreateWithoutCustomizationInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutCustomizationInput
    connect?: ChatbotWhereUniqueInput
  }

  export type ChatbotUpdateOneRequiredWithoutCustomizationNestedInput = {
    create?: XOR<ChatbotCreateWithoutCustomizationInput, ChatbotUncheckedCreateWithoutCustomizationInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutCustomizationInput
    upsert?: ChatbotUpsertWithoutCustomizationInput
    connect?: ChatbotWhereUniqueInput
    update?: XOR<XOR<ChatbotUpdateToOneWithWhereWithoutCustomizationInput, ChatbotUpdateWithoutCustomizationInput>, ChatbotUncheckedUpdateWithoutCustomizationInput>
  }

  export type ChatbotCreateNestedOneWithoutFlowsInput = {
    create?: XOR<ChatbotCreateWithoutFlowsInput, ChatbotUncheckedCreateWithoutFlowsInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutFlowsInput
    connect?: ChatbotWhereUniqueInput
  }

  export type ChatbotUpdateOneRequiredWithoutFlowsNestedInput = {
    create?: XOR<ChatbotCreateWithoutFlowsInput, ChatbotUncheckedCreateWithoutFlowsInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutFlowsInput
    upsert?: ChatbotUpsertWithoutFlowsInput
    connect?: ChatbotWhereUniqueInput
    update?: XOR<XOR<ChatbotUpdateToOneWithWhereWithoutFlowsInput, ChatbotUpdateWithoutFlowsInput>, ChatbotUncheckedUpdateWithoutFlowsInput>
  }

  export type ChatbotCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<ChatbotCreateWithoutAnalyticsInput, ChatbotUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutAnalyticsInput
    connect?: ChatbotWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalyticsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatbotUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<ChatbotCreateWithoutAnalyticsInput, ChatbotUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: ChatbotCreateOrConnectWithoutAnalyticsInput
    upsert?: ChatbotUpsertWithoutAnalyticsInput
    connect?: ChatbotWhereUniqueInput
    update?: XOR<XOR<ChatbotUpdateToOneWithWhereWithoutAnalyticsInput, ChatbotUpdateWithoutAnalyticsInput>, ChatbotUncheckedUpdateWithoutAnalyticsInput>
  }

  export type UserUpdateOneWithoutAnalyticsNestedInput = {
    create?: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalyticsInput
    upsert?: UserUpsertWithoutAnalyticsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalyticsInput, UserUpdateWithoutAnalyticsInput>, UserUncheckedUpdateWithoutAnalyticsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ChatbotCreateWithoutUserInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationCreateNestedOneWithoutChatbotInput
    flows?: FlowCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationUncheckedCreateNestedOneWithoutChatbotInput
    flows?: FlowUncheckedCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotCreateOrConnectWithoutUserInput = {
    where: ChatbotWhereUniqueInput
    create: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput>
  }

  export type ChatbotCreateManyUserInputEnvelope = {
    data: ChatbotCreateManyUserInput | ChatbotCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationCreateWithoutUserInput = {
    type: string
    token?: string | null
    config?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbot?: ChatbotCreateNestedOneWithoutIntegrationsInput
  }

  export type IntegrationUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    token?: string | null
    config?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbotId?: number | null
  }

  export type IntegrationCreateOrConnectWithoutUserInput = {
    where: IntegrationWhereUniqueInput
    create: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput>
  }

  export type IntegrationCreateManyUserInputEnvelope = {
    data: IntegrationCreateManyUserInput | IntegrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsCreateWithoutUserInput = {
    action: string
    timestamp?: Date | string
    chatbot: ChatbotCreateNestedOneWithoutAnalyticsInput
  }

  export type AnalyticsUncheckedCreateWithoutUserInput = {
    id?: number
    chatbotId: number
    action: string
    timestamp?: Date | string
  }

  export type AnalyticsCreateOrConnectWithoutUserInput = {
    where: AnalyticsWhereUniqueInput
    create: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput>
  }

  export type AnalyticsCreateManyUserInputEnvelope = {
    data: AnalyticsCreateManyUserInput | AnalyticsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatbotUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatbotWhereUniqueInput
    update: XOR<ChatbotUpdateWithoutUserInput, ChatbotUncheckedUpdateWithoutUserInput>
    create: XOR<ChatbotCreateWithoutUserInput, ChatbotUncheckedCreateWithoutUserInput>
  }

  export type ChatbotUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatbotWhereUniqueInput
    data: XOR<ChatbotUpdateWithoutUserInput, ChatbotUncheckedUpdateWithoutUserInput>
  }

  export type ChatbotUpdateManyWithWhereWithoutUserInput = {
    where: ChatbotScalarWhereInput
    data: XOR<ChatbotUpdateManyMutationInput, ChatbotUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatbotScalarWhereInput = {
    AND?: ChatbotScalarWhereInput | ChatbotScalarWhereInput[]
    OR?: ChatbotScalarWhereInput[]
    NOT?: ChatbotScalarWhereInput | ChatbotScalarWhereInput[]
    id?: IntFilter<"Chatbot"> | number
    name?: StringFilter<"Chatbot"> | string
    description?: StringNullableFilter<"Chatbot"> | string | null
    userId?: IntFilter<"Chatbot"> | number
    createdAt?: DateTimeFilter<"Chatbot"> | Date | string
    updatedAt?: DateTimeFilter<"Chatbot"> | Date | string
  }

  export type IntegrationUpsertWithWhereUniqueWithoutUserInput = {
    where: IntegrationWhereUniqueInput
    update: XOR<IntegrationUpdateWithoutUserInput, IntegrationUncheckedUpdateWithoutUserInput>
    create: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput>
  }

  export type IntegrationUpdateWithWhereUniqueWithoutUserInput = {
    where: IntegrationWhereUniqueInput
    data: XOR<IntegrationUpdateWithoutUserInput, IntegrationUncheckedUpdateWithoutUserInput>
  }

  export type IntegrationUpdateManyWithWhereWithoutUserInput = {
    where: IntegrationScalarWhereInput
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyWithoutUserInput>
  }

  export type IntegrationScalarWhereInput = {
    AND?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
    OR?: IntegrationScalarWhereInput[]
    NOT?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
    id?: IntFilter<"Integration"> | number
    userId?: IntFilter<"Integration"> | number
    type?: StringFilter<"Integration"> | string
    token?: StringNullableFilter<"Integration"> | string | null
    config?: StringNullableFilter<"Integration"> | string | null
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    chatbotId?: IntNullableFilter<"Integration"> | number | null
  }

  export type AnalyticsUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalyticsWhereUniqueInput
    update: XOR<AnalyticsUpdateWithoutUserInput, AnalyticsUncheckedUpdateWithoutUserInput>
    create: XOR<AnalyticsCreateWithoutUserInput, AnalyticsUncheckedCreateWithoutUserInput>
  }

  export type AnalyticsUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalyticsWhereUniqueInput
    data: XOR<AnalyticsUpdateWithoutUserInput, AnalyticsUncheckedUpdateWithoutUserInput>
  }

  export type AnalyticsUpdateManyWithWhereWithoutUserInput = {
    where: AnalyticsScalarWhereInput
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalyticsScalarWhereInput = {
    AND?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
    OR?: AnalyticsScalarWhereInput[]
    NOT?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[]
    id?: IntFilter<"Analytics"> | number
    chatbotId?: IntFilter<"Analytics"> | number
    userId?: IntNullableFilter<"Analytics"> | number | null
    action?: StringFilter<"Analytics"> | string
    timestamp?: DateTimeFilter<"Analytics"> | Date | string
  }

  export type UserCreateWithoutChatbotsInput = {
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatbotsInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatbotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatbotsInput, UserUncheckedCreateWithoutChatbotsInput>
  }

  export type ConversationCreateWithoutChatbotInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutChatbotInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutChatbotInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutChatbotInput, ConversationUncheckedCreateWithoutChatbotInput>
  }

  export type ConversationCreateManyChatbotInputEnvelope = {
    data: ConversationCreateManyChatbotInput | ConversationCreateManyChatbotInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationCreateWithoutChatbotInput = {
    type: string
    token?: string | null
    config?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIntegrationsInput
  }

  export type IntegrationUncheckedCreateWithoutChatbotInput = {
    id?: number
    userId: number
    type: string
    token?: string | null
    config?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationCreateOrConnectWithoutChatbotInput = {
    where: IntegrationWhereUniqueInput
    create: XOR<IntegrationCreateWithoutChatbotInput, IntegrationUncheckedCreateWithoutChatbotInput>
  }

  export type IntegrationCreateManyChatbotInputEnvelope = {
    data: IntegrationCreateManyChatbotInput | IntegrationCreateManyChatbotInput[]
    skipDuplicates?: boolean
  }

  export type MessageTemplateCreateWithoutChatbotInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageTemplateUncheckedCreateWithoutChatbotInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageTemplateCreateOrConnectWithoutChatbotInput = {
    where: MessageTemplateWhereUniqueInput
    create: XOR<MessageTemplateCreateWithoutChatbotInput, MessageTemplateUncheckedCreateWithoutChatbotInput>
  }

  export type MessageTemplateCreateManyChatbotInputEnvelope = {
    data: MessageTemplateCreateManyChatbotInput | MessageTemplateCreateManyChatbotInput[]
    skipDuplicates?: boolean
  }

  export type ChatbotCustomizationCreateWithoutChatbotInput = {
    name?: string | null
    avatar?: string | null
    greeting?: string | null
    personality?: string | null
    tone?: string | null
    language?: string | null
    config: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotCustomizationUncheckedCreateWithoutChatbotInput = {
    id?: number
    name?: string | null
    avatar?: string | null
    greeting?: string | null
    personality?: string | null
    tone?: string | null
    language?: string | null
    config: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotCustomizationCreateOrConnectWithoutChatbotInput = {
    where: ChatbotCustomizationWhereUniqueInput
    create: XOR<ChatbotCustomizationCreateWithoutChatbotInput, ChatbotCustomizationUncheckedCreateWithoutChatbotInput>
  }

  export type FlowCreateWithoutChatbotInput = {
    name: string
    steps: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowUncheckedCreateWithoutChatbotInput = {
    id?: number
    name: string
    steps: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowCreateOrConnectWithoutChatbotInput = {
    where: FlowWhereUniqueInput
    create: XOR<FlowCreateWithoutChatbotInput, FlowUncheckedCreateWithoutChatbotInput>
  }

  export type FlowCreateManyChatbotInputEnvelope = {
    data: FlowCreateManyChatbotInput | FlowCreateManyChatbotInput[]
    skipDuplicates?: boolean
  }

  export type AnalyticsCreateWithoutChatbotInput = {
    action: string
    timestamp?: Date | string
    user?: UserCreateNestedOneWithoutAnalyticsInput
  }

  export type AnalyticsUncheckedCreateWithoutChatbotInput = {
    id?: number
    userId?: number | null
    action: string
    timestamp?: Date | string
  }

  export type AnalyticsCreateOrConnectWithoutChatbotInput = {
    where: AnalyticsWhereUniqueInput
    create: XOR<AnalyticsCreateWithoutChatbotInput, AnalyticsUncheckedCreateWithoutChatbotInput>
  }

  export type AnalyticsCreateManyChatbotInputEnvelope = {
    data: AnalyticsCreateManyChatbotInput | AnalyticsCreateManyChatbotInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatbotsInput = {
    update: XOR<UserUpdateWithoutChatbotsInput, UserUncheckedUpdateWithoutChatbotsInput>
    create: XOR<UserCreateWithoutChatbotsInput, UserUncheckedCreateWithoutChatbotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatbotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatbotsInput, UserUncheckedUpdateWithoutChatbotsInput>
  }

  export type UserUpdateWithoutChatbotsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatbotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConversationUpsertWithWhereUniqueWithoutChatbotInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutChatbotInput, ConversationUncheckedUpdateWithoutChatbotInput>
    create: XOR<ConversationCreateWithoutChatbotInput, ConversationUncheckedCreateWithoutChatbotInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutChatbotInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutChatbotInput, ConversationUncheckedUpdateWithoutChatbotInput>
  }

  export type ConversationUpdateManyWithWhereWithoutChatbotInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutChatbotInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: IntFilter<"Conversation"> | number
    chatbotId?: IntFilter<"Conversation"> | number
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
  }

  export type IntegrationUpsertWithWhereUniqueWithoutChatbotInput = {
    where: IntegrationWhereUniqueInput
    update: XOR<IntegrationUpdateWithoutChatbotInput, IntegrationUncheckedUpdateWithoutChatbotInput>
    create: XOR<IntegrationCreateWithoutChatbotInput, IntegrationUncheckedCreateWithoutChatbotInput>
  }

  export type IntegrationUpdateWithWhereUniqueWithoutChatbotInput = {
    where: IntegrationWhereUniqueInput
    data: XOR<IntegrationUpdateWithoutChatbotInput, IntegrationUncheckedUpdateWithoutChatbotInput>
  }

  export type IntegrationUpdateManyWithWhereWithoutChatbotInput = {
    where: IntegrationScalarWhereInput
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyWithoutChatbotInput>
  }

  export type MessageTemplateUpsertWithWhereUniqueWithoutChatbotInput = {
    where: MessageTemplateWhereUniqueInput
    update: XOR<MessageTemplateUpdateWithoutChatbotInput, MessageTemplateUncheckedUpdateWithoutChatbotInput>
    create: XOR<MessageTemplateCreateWithoutChatbotInput, MessageTemplateUncheckedCreateWithoutChatbotInput>
  }

  export type MessageTemplateUpdateWithWhereUniqueWithoutChatbotInput = {
    where: MessageTemplateWhereUniqueInput
    data: XOR<MessageTemplateUpdateWithoutChatbotInput, MessageTemplateUncheckedUpdateWithoutChatbotInput>
  }

  export type MessageTemplateUpdateManyWithWhereWithoutChatbotInput = {
    where: MessageTemplateScalarWhereInput
    data: XOR<MessageTemplateUpdateManyMutationInput, MessageTemplateUncheckedUpdateManyWithoutChatbotInput>
  }

  export type MessageTemplateScalarWhereInput = {
    AND?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
    OR?: MessageTemplateScalarWhereInput[]
    NOT?: MessageTemplateScalarWhereInput | MessageTemplateScalarWhereInput[]
    id?: IntFilter<"MessageTemplate"> | number
    chatbotId?: IntFilter<"MessageTemplate"> | number
    title?: StringFilter<"MessageTemplate"> | string
    content?: StringFilter<"MessageTemplate"> | string
    createdAt?: DateTimeFilter<"MessageTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"MessageTemplate"> | Date | string
  }

  export type ChatbotCustomizationUpsertWithoutChatbotInput = {
    update: XOR<ChatbotCustomizationUpdateWithoutChatbotInput, ChatbotCustomizationUncheckedUpdateWithoutChatbotInput>
    create: XOR<ChatbotCustomizationCreateWithoutChatbotInput, ChatbotCustomizationUncheckedCreateWithoutChatbotInput>
    where?: ChatbotCustomizationWhereInput
  }

  export type ChatbotCustomizationUpdateToOneWithWhereWithoutChatbotInput = {
    where?: ChatbotCustomizationWhereInput
    data: XOR<ChatbotCustomizationUpdateWithoutChatbotInput, ChatbotCustomizationUncheckedUpdateWithoutChatbotInput>
  }

  export type ChatbotCustomizationUpdateWithoutChatbotInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    greeting?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotCustomizationUncheckedUpdateWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    greeting?: NullableStringFieldUpdateOperationsInput | string | null
    personality?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowUpsertWithWhereUniqueWithoutChatbotInput = {
    where: FlowWhereUniqueInput
    update: XOR<FlowUpdateWithoutChatbotInput, FlowUncheckedUpdateWithoutChatbotInput>
    create: XOR<FlowCreateWithoutChatbotInput, FlowUncheckedCreateWithoutChatbotInput>
  }

  export type FlowUpdateWithWhereUniqueWithoutChatbotInput = {
    where: FlowWhereUniqueInput
    data: XOR<FlowUpdateWithoutChatbotInput, FlowUncheckedUpdateWithoutChatbotInput>
  }

  export type FlowUpdateManyWithWhereWithoutChatbotInput = {
    where: FlowScalarWhereInput
    data: XOR<FlowUpdateManyMutationInput, FlowUncheckedUpdateManyWithoutChatbotInput>
  }

  export type FlowScalarWhereInput = {
    AND?: FlowScalarWhereInput | FlowScalarWhereInput[]
    OR?: FlowScalarWhereInput[]
    NOT?: FlowScalarWhereInput | FlowScalarWhereInput[]
    id?: IntFilter<"Flow"> | number
    chatbotId?: IntFilter<"Flow"> | number
    name?: StringFilter<"Flow"> | string
    steps?: StringFilter<"Flow"> | string
    createdAt?: DateTimeFilter<"Flow"> | Date | string
    updatedAt?: DateTimeFilter<"Flow"> | Date | string
  }

  export type AnalyticsUpsertWithWhereUniqueWithoutChatbotInput = {
    where: AnalyticsWhereUniqueInput
    update: XOR<AnalyticsUpdateWithoutChatbotInput, AnalyticsUncheckedUpdateWithoutChatbotInput>
    create: XOR<AnalyticsCreateWithoutChatbotInput, AnalyticsUncheckedCreateWithoutChatbotInput>
  }

  export type AnalyticsUpdateWithWhereUniqueWithoutChatbotInput = {
    where: AnalyticsWhereUniqueInput
    data: XOR<AnalyticsUpdateWithoutChatbotInput, AnalyticsUncheckedUpdateWithoutChatbotInput>
  }

  export type AnalyticsUpdateManyWithWhereWithoutChatbotInput = {
    where: AnalyticsScalarWhereInput
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyWithoutChatbotInput>
  }

  export type ChatbotCreateWithoutConversationsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatbotsInput
    integrations?: IntegrationCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationCreateNestedOneWithoutChatbotInput
    flows?: FlowCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotUncheckedCreateWithoutConversationsInput = {
    id?: number
    name: string
    description?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    integrations?: IntegrationUncheckedCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationUncheckedCreateNestedOneWithoutChatbotInput
    flows?: FlowUncheckedCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotCreateOrConnectWithoutConversationsInput = {
    where: ChatbotWhereUniqueInput
    create: XOR<ChatbotCreateWithoutConversationsInput, ChatbotUncheckedCreateWithoutConversationsInput>
  }

  export type MessageCreateWithoutConversationInput = {
    content: string
    sender: string
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: number
    content: string
    sender: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type ChatbotUpsertWithoutConversationsInput = {
    update: XOR<ChatbotUpdateWithoutConversationsInput, ChatbotUncheckedUpdateWithoutConversationsInput>
    create: XOR<ChatbotCreateWithoutConversationsInput, ChatbotUncheckedCreateWithoutConversationsInput>
    where?: ChatbotWhereInput
  }

  export type ChatbotUpdateToOneWithWhereWithoutConversationsInput = {
    where?: ChatbotWhereInput
    data: XOR<ChatbotUpdateWithoutConversationsInput, ChatbotUncheckedUpdateWithoutConversationsInput>
  }

  export type ChatbotUpdateWithoutConversationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatbotsNestedInput
    integrations?: IntegrationUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUpdateOneWithoutChatbotNestedInput
    flows?: FlowUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrations?: IntegrationUncheckedUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUncheckedUpdateOneWithoutChatbotNestedInput
    flows?: FlowUncheckedUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutChatbotNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    sender?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ConversationCreateWithoutMessagesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbot: ChatbotCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: number
    chatbotId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbot?: ChatbotUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutIntegrationsInput = {
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbots?: ChatbotCreateNestedManyWithoutUserInput
    analytics?: AnalyticsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIntegrationsInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbots?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIntegrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
  }

  export type ChatbotCreateWithoutIntegrationsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatbotsInput
    conversations?: ConversationCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationCreateNestedOneWithoutChatbotInput
    flows?: FlowCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotUncheckedCreateWithoutIntegrationsInput = {
    id?: number
    name: string
    description?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationUncheckedCreateNestedOneWithoutChatbotInput
    flows?: FlowUncheckedCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotCreateOrConnectWithoutIntegrationsInput = {
    where: ChatbotWhereUniqueInput
    create: XOR<ChatbotCreateWithoutIntegrationsInput, ChatbotUncheckedCreateWithoutIntegrationsInput>
  }

  export type UserUpsertWithoutIntegrationsInput = {
    update: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type UserUpdateWithoutIntegrationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbots?: ChatbotUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIntegrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbots?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatbotUpsertWithoutIntegrationsInput = {
    update: XOR<ChatbotUpdateWithoutIntegrationsInput, ChatbotUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<ChatbotCreateWithoutIntegrationsInput, ChatbotUncheckedCreateWithoutIntegrationsInput>
    where?: ChatbotWhereInput
  }

  export type ChatbotUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: ChatbotWhereInput
    data: XOR<ChatbotUpdateWithoutIntegrationsInput, ChatbotUncheckedUpdateWithoutIntegrationsInput>
  }

  export type ChatbotUpdateWithoutIntegrationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatbotsNestedInput
    conversations?: ConversationUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUpdateOneWithoutChatbotNestedInput
    flows?: FlowUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotUncheckedUpdateWithoutIntegrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUncheckedUpdateOneWithoutChatbotNestedInput
    flows?: FlowUncheckedUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotCreateWithoutTemplatesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatbotsInput
    conversations?: ConversationCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationCreateNestedOneWithoutChatbotInput
    flows?: FlowCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotUncheckedCreateWithoutTemplatesInput = {
    id?: number
    name: string
    description?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationUncheckedCreateNestedOneWithoutChatbotInput
    flows?: FlowUncheckedCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotCreateOrConnectWithoutTemplatesInput = {
    where: ChatbotWhereUniqueInput
    create: XOR<ChatbotCreateWithoutTemplatesInput, ChatbotUncheckedCreateWithoutTemplatesInput>
  }

  export type ChatbotUpsertWithoutTemplatesInput = {
    update: XOR<ChatbotUpdateWithoutTemplatesInput, ChatbotUncheckedUpdateWithoutTemplatesInput>
    create: XOR<ChatbotCreateWithoutTemplatesInput, ChatbotUncheckedCreateWithoutTemplatesInput>
    where?: ChatbotWhereInput
  }

  export type ChatbotUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: ChatbotWhereInput
    data: XOR<ChatbotUpdateWithoutTemplatesInput, ChatbotUncheckedUpdateWithoutTemplatesInput>
  }

  export type ChatbotUpdateWithoutTemplatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatbotsNestedInput
    conversations?: ConversationUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUpdateOneWithoutChatbotNestedInput
    flows?: FlowUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotUncheckedUpdateWithoutTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUncheckedUpdateOneWithoutChatbotNestedInput
    flows?: FlowUncheckedUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotCreateWithoutCustomizationInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatbotsInput
    conversations?: ConversationCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateCreateNestedManyWithoutChatbotInput
    flows?: FlowCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotUncheckedCreateWithoutCustomizationInput = {
    id?: number
    name: string
    description?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutChatbotInput
    flows?: FlowUncheckedCreateNestedManyWithoutChatbotInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotCreateOrConnectWithoutCustomizationInput = {
    where: ChatbotWhereUniqueInput
    create: XOR<ChatbotCreateWithoutCustomizationInput, ChatbotUncheckedCreateWithoutCustomizationInput>
  }

  export type ChatbotUpsertWithoutCustomizationInput = {
    update: XOR<ChatbotUpdateWithoutCustomizationInput, ChatbotUncheckedUpdateWithoutCustomizationInput>
    create: XOR<ChatbotCreateWithoutCustomizationInput, ChatbotUncheckedCreateWithoutCustomizationInput>
    where?: ChatbotWhereInput
  }

  export type ChatbotUpdateToOneWithWhereWithoutCustomizationInput = {
    where?: ChatbotWhereInput
    data: XOR<ChatbotUpdateWithoutCustomizationInput, ChatbotUncheckedUpdateWithoutCustomizationInput>
  }

  export type ChatbotUpdateWithoutCustomizationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatbotsNestedInput
    conversations?: ConversationUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUpdateManyWithoutChatbotNestedInput
    flows?: FlowUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotUncheckedUpdateWithoutCustomizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutChatbotNestedInput
    flows?: FlowUncheckedUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotCreateWithoutFlowsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatbotsInput
    conversations?: ConversationCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationCreateNestedOneWithoutChatbotInput
    analytics?: AnalyticsCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotUncheckedCreateWithoutFlowsInput = {
    id?: number
    name: string
    description?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationUncheckedCreateNestedOneWithoutChatbotInput
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotCreateOrConnectWithoutFlowsInput = {
    where: ChatbotWhereUniqueInput
    create: XOR<ChatbotCreateWithoutFlowsInput, ChatbotUncheckedCreateWithoutFlowsInput>
  }

  export type ChatbotUpsertWithoutFlowsInput = {
    update: XOR<ChatbotUpdateWithoutFlowsInput, ChatbotUncheckedUpdateWithoutFlowsInput>
    create: XOR<ChatbotCreateWithoutFlowsInput, ChatbotUncheckedCreateWithoutFlowsInput>
    where?: ChatbotWhereInput
  }

  export type ChatbotUpdateToOneWithWhereWithoutFlowsInput = {
    where?: ChatbotWhereInput
    data: XOR<ChatbotUpdateWithoutFlowsInput, ChatbotUncheckedUpdateWithoutFlowsInput>
  }

  export type ChatbotUpdateWithoutFlowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatbotsNestedInput
    conversations?: ConversationUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUpdateOneWithoutChatbotNestedInput
    analytics?: AnalyticsUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotUncheckedUpdateWithoutFlowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUncheckedUpdateOneWithoutChatbotNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotCreateWithoutAnalyticsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatbotsInput
    conversations?: ConversationCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationCreateNestedOneWithoutChatbotInput
    flows?: FlowCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotUncheckedCreateWithoutAnalyticsInput = {
    id?: number
    name: string
    description?: string | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutChatbotInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutChatbotInput
    templates?: MessageTemplateUncheckedCreateNestedManyWithoutChatbotInput
    customization?: ChatbotCustomizationUncheckedCreateNestedOneWithoutChatbotInput
    flows?: FlowUncheckedCreateNestedManyWithoutChatbotInput
  }

  export type ChatbotCreateOrConnectWithoutAnalyticsInput = {
    where: ChatbotWhereUniqueInput
    create: XOR<ChatbotCreateWithoutAnalyticsInput, ChatbotUncheckedCreateWithoutAnalyticsInput>
  }

  export type UserCreateWithoutAnalyticsInput = {
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbots?: ChatbotCreateNestedManyWithoutUserInput
    integrations?: IntegrationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnalyticsInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbots?: ChatbotUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnalyticsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
  }

  export type ChatbotUpsertWithoutAnalyticsInput = {
    update: XOR<ChatbotUpdateWithoutAnalyticsInput, ChatbotUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<ChatbotCreateWithoutAnalyticsInput, ChatbotUncheckedCreateWithoutAnalyticsInput>
    where?: ChatbotWhereInput
  }

  export type ChatbotUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: ChatbotWhereInput
    data: XOR<ChatbotUpdateWithoutAnalyticsInput, ChatbotUncheckedUpdateWithoutAnalyticsInput>
  }

  export type ChatbotUpdateWithoutAnalyticsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatbotsNestedInput
    conversations?: ConversationUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUpdateOneWithoutChatbotNestedInput
    flows?: FlowUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotUncheckedUpdateWithoutAnalyticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUncheckedUpdateOneWithoutChatbotNestedInput
    flows?: FlowUncheckedUpdateManyWithoutChatbotNestedInput
  }

  export type UserUpsertWithoutAnalyticsInput = {
    update: XOR<UserUpdateWithoutAnalyticsInput, UserUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<UserCreateWithoutAnalyticsInput, UserUncheckedCreateWithoutAnalyticsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalyticsInput, UserUncheckedUpdateWithoutAnalyticsInput>
  }

  export type UserUpdateWithoutAnalyticsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbots?: ChatbotUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalyticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbots?: ChatbotUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatbotCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationCreateManyUserInput = {
    id?: number
    type: string
    token?: string | null
    config?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatbotId?: number | null
  }

  export type AnalyticsCreateManyUserInput = {
    id?: number
    chatbotId: number
    action: string
    timestamp?: Date | string
  }

  export type ChatbotUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUpdateOneWithoutChatbotNestedInput
    flows?: FlowUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutChatbotNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutChatbotNestedInput
    templates?: MessageTemplateUncheckedUpdateManyWithoutChatbotNestedInput
    customization?: ChatbotCustomizationUncheckedUpdateOneWithoutChatbotNestedInput
    flows?: FlowUncheckedUpdateManyWithoutChatbotNestedInput
    analytics?: AnalyticsUncheckedUpdateManyWithoutChatbotNestedInput
  }

  export type ChatbotUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbot?: ChatbotUpdateOneWithoutIntegrationsNestedInput
  }

  export type IntegrationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbotId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntegrationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbotId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnalyticsUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    chatbot?: ChatbotUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type AnalyticsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatbotId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateManyChatbotInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationCreateManyChatbotInput = {
    id?: number
    userId: number
    type: string
    token?: string | null
    config?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageTemplateCreateManyChatbotInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowCreateManyChatbotInput = {
    id?: number
    name: string
    steps: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalyticsCreateManyChatbotInput = {
    id?: number
    userId?: number | null
    action: string
    timestamp?: Date | string
  }

  export type ConversationUpdateWithoutChatbotInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUpdateWithoutChatbotInput = {
    type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIntegrationsNestedInput
  }

  export type IntegrationUncheckedUpdateWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUncheckedUpdateManyWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageTemplateUpdateWithoutChatbotInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageTemplateUncheckedUpdateWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageTemplateUncheckedUpdateManyWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowUpdateWithoutChatbotInput = {
    name?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowUncheckedUpdateWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowUncheckedUpdateManyWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    steps?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUpdateWithoutChatbotInput = {
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAnalyticsNestedInput
  }

  export type AnalyticsUncheckedUpdateWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyWithoutChatbotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: number
    content: string
    sender: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    content?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}