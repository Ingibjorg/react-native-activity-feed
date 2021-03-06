// @flow

import * as React from 'react';
import type { NavigationScreenProp } from 'react-navigation';
import type {
  ActivityArgData,
  ActivityResponse,
  StreamUserSession,
  ReactionKindMap,
  UserResponse,
  ReactionRequestOptions,
  EnrichedReactionResponse,
  OgData as OgDataGetStream,
} from 'getstream';
import type { AppCtx, FeedCtx } from './Context';

export type NavigationScreen = NavigationScreenProp<{}>;

// Copied from react native source code
type StyleSheetInternalStyleIdentifier = number;

type StyleSheetInstance = { [string]: StyleSheetInternalStyleIdentifier };

export type StyleSheetLike = { [string]: {} } | StyleSheetInstance;
export type Style = {} | StyleSheetInternalStyleIdentifier;

export type FlowRequestTypes =
  | 'get-user-info'
  | 'get-feed'
  | 'get-feed-next-page'
  | 'get-notification-counts'
  | 'upload-image'
  | 'add-activity'
  | 'add-reaction'
  | 'delete-reaction';

export type ErrorHandler = (
  error: Error,
  type: FlowRequestTypes,
  details: {},
) => mixed;

type ReactComponentClass = Class<React.Component<any>>;
export type ReactComponentFunction = (props: any) => ?React.Element<any>;
export type ReactElementCreator = ReactComponentClass | ReactComponentFunction;
export type RenderableButNotElement = ?(
  | ReactElementCreator
  | boolean
  | number
  | string
);
export type Renderable = RenderableButNotElement | React.Element<any>;

export type BaseActivityResponse = ActivityResponse<{}, {}>;
export type BaseAppCtx = AppCtx<{}>;
export type BaseFeedCtx = FeedCtx;
export type BaseUserSession = StreamUserSession<{}>;

export type BaseReactionMap = ReactionKindMap<Object, Object>;

export type BaseUserResponse = UserResponse<{}>;

export type UserData = {
  name?: string,
  profileImage?: string,
};

export type OgData = OgDataGetStream;
export type CustomActivityData = {
  text?: string,
  link?: boolean,
  image?: string,
  attachments?: {
    images?: Array<string>,
    og?: OgData,
  },
};

export type CustomActivityArgData = ActivityArgData<{}, CustomActivityData>;

export type ActivityData = ActivityResponse<UserData, CustomActivityData>;

export type ToggleReactionCallbackFunction = (
  kind: string,
  activity: BaseActivityResponse,
  options: { trackAnalytics?: boolean } & ReactionRequestOptions<{}>,
) => void | Promise<mixed>;

export type AddReactionCallbackFunction = (
  kind: string,
  activity: BaseActivityResponse,
  options: { trackAnalytics?: boolean } & ReactionRequestOptions<{}>,
) => void | Promise<mixed>;

export type RemoveReactionCallbackFunction = (
  kind: string,
  activity: BaseActivityResponse,
  id: string,
  options: { trackAnalytics?: boolean } & ReactionRequestOptions<{}>,
) => void | Promise<mixed>;

export type CommentData = {
  text: string,
};

export type Comment = EnrichedReactionResponse<UserData, CommentData>;
