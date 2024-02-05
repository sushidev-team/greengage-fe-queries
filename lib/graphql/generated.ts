import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type AddMissionDataset = {
  values?: InputMaybe<Array<InputMaybe<AddMissionDatasetItem>>>;
};

export type AddMissionDatasetItem = {
  type?: InputMaybe<DatasetType>;
  value?: InputMaybe<Scalars['String']>;
};

export enum AssetType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type City = {
  __typename?: 'City';
  geo_start?: Maybe<GeoPosition>;
  geo_stop?: Maybe<GeoPosition>;
  grid?: Maybe<TilePaginationList>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};


export type CityGridArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type CreateCity = {
  latitude_start?: InputMaybe<Scalars['Float']>;
  latitude_stop?: InputMaybe<Scalars['Float']>;
  longitude_start?: InputMaybe<Scalars['Float']>;
  longitude_stop?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateMission = {
  active?: InputMaybe<Scalars['Boolean']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_type?: InputMaybe<AssetType>;
  deeplink?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  external_id?: InputMaybe<Scalars['String']>;
  /** Stringified JSON input */
  geojson?: InputMaybe<Scalars['String']>;
  help?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  /** Point of interest */
  poi?: InputMaybe<Scalars['ID']>;
  points?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<MissionProvider>;
  settings?: InputMaybe<SetMissionSettings>;
  status?: InputMaybe<MissionStatus>;
  survey?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  topic?: InputMaybe<MissionTopic>;
  type?: InputMaybe<MissionType>;
  validation_amount?: InputMaybe<Scalars['Int']>;
};

export type CreatePoi = {
  asset?: InputMaybe<Scalars['String']>;
  asset_type?: InputMaybe<AssetType>;
  description?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
  type?: InputMaybe<PointOfInterestType>;
};

export type CreateSurvey = {
  title?: InputMaybe<Scalars['String']>;
};

export type CreateSurveyQuestion = {
  help?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<SuveryQuestionOption>>;
  question: Scalars['String'];
  survey: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  type: SurveyQuestionType;
};

export type CreateSurveySubmission = {
  answers?: InputMaybe<Array<SurveySubmissionDataAnswer>>;
  survey: Scalars['ID'];
};

export enum DatasetType {
  Amount = 'AMOUNT',
  HeightMillimeter = 'HEIGHT_MILLIMETER',
  /** Please us a value between 0 and 10 */
  Rating = 'RATING',
  WeightGramm = 'WEIGHT_GRAMM',
  WidthMillimeter = 'WIDTH_MILLIMETER'
}

export type DefaultPaginator = {
  __typename?: 'DefaultPaginator';
  count?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages?: Maybe<Scalars['Boolean']>;
  lastItem?: Maybe<Scalars['Int']>;
  lastPage?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type GeoJson = {
  __typename?: 'GeoJSON';
  features?: Maybe<Array<GeoJsonFeature>>;
  type: Scalars['String'];
};

export type GeoJsonFeature = {
  __typename?: 'GeoJSONFeature';
  geometry: GeoJsonGeometry;
  properties?: Maybe<Tile>;
  type: Scalars['String'];
};

export type GeoJsonGeometry = GeoJsonLineString | GeoJsonMultiPoint | GeoJsonMultiPolygon | GeoJsonPoint | GeoJsonPolygon;

export type GeoJsonLineString = {
  __typename?: 'GeoJSONLineString';
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
  type: Scalars['String'];
};

export type GeoJsonMultiLineString = {
  __typename?: 'GeoJSONMultiLineString';
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>>>;
  type: Scalars['String'];
};

export type GeoJsonMultiPoint = {
  __typename?: 'GeoJSONMultiPoint';
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
  type: Scalars['String'];
};

export type GeoJsonMultiPolygon = {
  __typename?: 'GeoJSONMultiPolygon';
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>>>>>;
  type: Scalars['String'];
};

export type GeoJsonPoint = {
  __typename?: 'GeoJSONPoint';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
  type: Scalars['String'];
};

export type GeoJsonPolygon = {
  __typename?: 'GeoJSONPolygon';
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>>>;
  type: Scalars['String'];
};

export type GeoPosition = {
  __typename?: 'GeoPosition';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type Health = {
  __typename?: 'Health';
  checkId?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Mission = {
  __typename?: 'Mission';
  active?: Maybe<Scalars['Boolean']>;
  /** Asset */
  asset?: Maybe<Scalars['String']>;
  /** Asset absolute / http apth */
  asset_full?: Maybe<Scalars['String']>;
  /** Asset type */
  asset_type?: Maybe<AssetType>;
  creator?: Maybe<User>;
  /** This will be filled if the provider is not greengage */
  deeplink?: Maybe<Scalars['String']>;
  /** Description of mission */
  description?: Maybe<Scalars['String']>;
  /** Duration is the esitmation of how long a mission will take in minutes */
  duration?: Maybe<Scalars['Int']>;
  /** This id can be used to identify entries within other systems */
  external_id?: Maybe<Scalars['String']>;
  geojson?: Maybe<GeoJson>;
  /** Unique primary key. */
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  poi?: Maybe<PointOfInterest>;
  points?: Maybe<Scalars['Int']>;
  possible_mutations?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Provider of the mission */
  provider?: Maybe<MissionProvider>;
  settings?: Maybe<MissionSettings>;
  status?: Maybe<MissionStatus>;
  survey?: Maybe<Survey>;
  /** Title of mission */
  title?: Maybe<Scalars['String']>;
  topic?: Maybe<MissionTopic>;
  /** Type of the mission */
  type?: Maybe<MissionType>;
  user?: Maybe<User>;
  /** Amount of validation needed to close the mission. In case of none validation task this will define the amount of data sets required to automatically close. */
  validation_amount?: Maybe<Scalars['Int']>;
  validations?: Maybe<Array<MissionValidation>>;
  values?: Maybe<Array<MissionValue>>;
  walks?: Maybe<Array<MissionWalk>>;
};

export type MissionDataset = {
  __typename?: 'MissionDataset';
  data?: Maybe<MissionDatasetOverview>;
  id: Scalars['ID'];
};

export type MissionDatasetItem = {
  __typename?: 'MissionDatasetItem';
  type?: Maybe<DatasetType>;
  value?: Maybe<Scalars['String']>;
};

export type MissionDatasetOverview = {
  __typename?: 'MissionDatasetOverview';
  /** Contains the sets of information passed by the user */
  values?: Maybe<Array<MissionDatasetItem>>;
};

export enum MissionProvider {
  Greengage = 'GREENGAGE',
  Mindearth = 'MINDEARTH'
}

export type MissionRatingAmount = {
  __typename?: 'MissionRatingAmount';
  value?: Maybe<Scalars['Float']>;
};

export type MissionRatingAverage = {
  __typename?: 'MissionRatingAverage';
  value?: Maybe<Scalars['Float']>;
};

export type MissionSet = {
  __typename?: 'MissionSet';
  id?: Maybe<Scalars['ID']>;
  missions?: Maybe<Array<Maybe<Mission>>>;
};

export type MissionSettings = {
  __typename?: 'MissionSettings';
  ratingSetting?: Maybe<MissionSettingsRating>;
  /** Defines the type of settings that should be taken */
  type?: Maybe<Scalars['String']>;
};

export type MissionSettingsRating = {
  __typename?: 'MissionSettingsRating';
  label?: Maybe<Scalars['String']>;
  labelAverage?: Maybe<Scalars['String']>;
  labelMax?: Maybe<Scalars['String']>;
  labelMin?: Maybe<Scalars['String']>;
};

export enum MissionStatus {
  Failed = 'FAILED',
  Finished = 'FINISHED',
  Open = 'OPEN',
  Pending = 'PENDING'
}

export enum MissionTopic {
  AirQuality = 'AIR_QUALITY',
  Biodiversity = 'BIODIVERSITY',
  Littering = 'LITTERING',
  Mindearth = 'MINDEARTH',
  Noise = 'NOISE',
  None = 'NONE',
  Safety = 'SAFETY',
  Traffic = 'TRAFFIC',
  WellBeing = 'WELL_BEING'
}

export enum MissionType {
  Dataset = 'DATASET',
  Mindearth = 'MINDEARTH',
  Photo = 'PHOTO',
  Survey = 'SURVEY',
  Validation = 'VALIDATION',
  Walk = 'WALK'
}

export type MissionUpload = {
  __typename?: 'MissionUpload';
  id: Scalars['ID'];
  mission?: Maybe<Mission>;
  path?: Maybe<Scalars['String']>;
};

export type MissionValidation = {
  __typename?: 'MissionValidation';
  user_id: Scalars['ID'];
  valid: Scalars['Boolean'];
};

export type MissionValue = MissionRatingAmount | MissionRatingAverage;

export type MissionWalk = {
  __typename?: 'MissionWalk';
  checked?: Maybe<Scalars['Boolean']>;
  geojson?: Maybe<GeoJson>;
  id: Scalars['ID'];
  valid?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a set of information to a mission */
  addMissionDataset?: Maybe<MissionDataset>;
  clearSurvey?: Maybe<Scalars['Boolean']>;
  createCity?: Maybe<City>;
  createMission?: Maybe<Mission>;
  createPoi?: Maybe<PointOfInterest>;
  createSurvey?: Maybe<Survey>;
  createSurveyQuestion?: Maybe<SurveyQuestion>;
  currentCity?: Maybe<City>;
  currentTiles?: Maybe<GeoJson>;
  deleteCity?: Maybe<Scalars['Boolean']>;
  deleteMission?: Maybe<Scalars['Boolean']>;
  /** Delete a dataset information for a mission (only admins and user are allowed). I */
  deleteMissionDataset?: Maybe<Scalars['Boolean']>;
  deletePoi?: Maybe<Scalars['Boolean']>;
  deleteSurvey?: Maybe<Scalars['Boolean']>;
  deleteSurveyQuestion?: Maybe<Scalars['Boolean']>;
  login?: Maybe<UserToken>;
  refreshToken?: Maybe<UserToken>;
  register?: Maybe<UserToken>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  setPassword?: Maybe<Scalars['Boolean']>;
  setRole?: Maybe<Scalars['Boolean']>;
  startMission?: Maybe<Mission>;
  stopMission?: Maybe<Mission>;
  submitToSurvey?: Maybe<SurveySubmission>;
  updateCity?: Maybe<City>;
  updateFavoriteCity?: Maybe<Scalars['Boolean']>;
  updateMission?: Maybe<Mission>;
  updatePoi?: Maybe<PointOfInterest>;
  updateProfile?: Maybe<User>;
  updateSurvey?: Maybe<Survey>;
  updateSurveyQuestion?: Maybe<SurveyQuestion>;
  /** Upload a file to mission */
  uploadToMission?: Maybe<MissionUpload>;
  /** Validate an information from a mission */
  validateMission?: Maybe<Mission>;
  /** Send walk mission data */
  walkMission?: Maybe<Mission>;
};


export type MutationAddMissionDatasetArgs = {
  data?: InputMaybe<AddMissionDataset>;
  mission: Scalars['ID'];
};


export type MutationClearSurveyArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCityArgs = {
  data?: InputMaybe<CreateCity>;
};


export type MutationCreateMissionArgs = {
  data?: InputMaybe<CreateMission>;
};


export type MutationCreatePoiArgs = {
  data?: InputMaybe<CreatePoi>;
};


export type MutationCreateSurveyArgs = {
  data?: InputMaybe<CreateSurvey>;
};


export type MutationCreateSurveyQuestionArgs = {
  data?: InputMaybe<CreateSurveyQuestion>;
};


export type MutationCurrentCityArgs = {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};


export type MutationCurrentTilesArgs = {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};


export type MutationDeleteCityArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMissionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMissionDatasetArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePoiArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSurveyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSurveyQuestionArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  data?: InputMaybe<RegisterForm>;
};


export type MutationResetPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationSetPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
  old_password?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_confirmation?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationSetRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
  role?: InputMaybe<Scalars['String']>;
};


export type MutationStartMissionArgs = {
  id: Scalars['ID'];
};


export type MutationStopMissionArgs = {
  id: Scalars['ID'];
};


export type MutationSubmitToSurveyArgs = {
  data?: InputMaybe<CreateSurveySubmission>;
};


export type MutationUpdateCityArgs = {
  data?: InputMaybe<UpdateCity>;
};


export type MutationUpdateFavoriteCityArgs = {
  city?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateMissionArgs = {
  data?: InputMaybe<UpdateMission>;
};


export type MutationUpdatePoiArgs = {
  data?: InputMaybe<UpdatePoi>;
};


export type MutationUpdateProfileArgs = {
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateSurveyArgs = {
  data?: InputMaybe<UpdateSurvey>;
};


export type MutationUpdateSurveyQuestionArgs = {
  data?: InputMaybe<UpdateSurveyQuestion>;
};


export type MutationUploadToMissionArgs = {
  file: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationValidateMissionArgs = {
  id: Scalars['ID'];
  valid?: InputMaybe<Scalars['Boolean']>;
};


export type MutationWalkMissionArgs = {
  geojson?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

export type PoiSet = {
  __typename?: 'PoiSet';
  id?: Maybe<Scalars['ID']>;
  pois?: Maybe<Array<Maybe<PointOfInterest>>>;
};

export type PointOfInterest = {
  __typename?: 'PointOfInterest';
  /** Asset */
  asset?: Maybe<Scalars['String']>;
  /** Asset absolute / http apth */
  asset_full?: Maybe<Scalars['String']>;
  /** Asset type */
  asset_type?: Maybe<AssetType>;
  /** Description of poi */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  /** Title of poi */
  title?: Maybe<Scalars['String']>;
  /** Type of poi */
  type?: Maybe<PointOfInterestType>;
};

export enum PointOfInterestType {
  Commerce = 'COMMERCE',
  Default = 'DEFAULT',
  Entertainment = 'ENTERTAINMENT',
  Nature = 'NATURE'
}

export type Query = {
  __typename?: 'Query';
  cities?: Maybe<Array<Maybe<City>>>;
  city?: Maybe<City>;
  health?: Maybe<Health>;
  me?: Maybe<User>;
  mission?: Maybe<Mission>;
  missionDatasets?: Maybe<Array<Maybe<MissionDataset>>>;
  missions?: Maybe<Array<Maybe<Mission>>>;
  myMissions?: Maybe<Array<Maybe<Mission>>>;
  poi?: Maybe<PointOfInterest>;
  pois?: Maybe<Array<Maybe<PointOfInterest>>>;
  submissions?: Maybe<Array<Maybe<SurveySubmission>>>;
  survey?: Maybe<Survey>;
  surveys?: Maybe<Array<Maybe<Survey>>>;
};


export type QueryCityArgs = {
  id: Scalars['ID'];
};


export type QueryMissionArgs = {
  id: Scalars['ID'];
};


export type QueryMissionDatasetsArgs = {
  mission: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMissionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMyMissionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPoiArgs = {
  id: Scalars['ID'];
};


export type QueryPoisArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySubmissionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  survey: Scalars['ID'];
};


export type QuerySurveyArgs = {
  id: Scalars['ID'];
};


export type QuerySurveysArgs = {
  page?: InputMaybe<Scalars['Int']>;
};

export type RegisterForm = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_confirmation?: InputMaybe<Scalars['String']>;
};

export type SetMissionSettings = {
  ratingSetting?: InputMaybe<SetMissionSettingsRating>;
  type?: InputMaybe<Scalars['String']>;
};

export type SetMissionSettingsRating = {
  label?: InputMaybe<Scalars['String']>;
  labelAverage?: InputMaybe<Scalars['String']>;
  labelMax?: InputMaybe<Scalars['String']>;
  labelMin?: InputMaybe<Scalars['String']>;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Survey = {
  __typename?: 'Survey';
  id: Scalars['ID'];
  questions?: Maybe<Array<Maybe<SurveyQuestion>>>;
  title: Scalars['String'];
};

export type SurveyQuestion = {
  __typename?: 'SurveyQuestion';
  /** Help text should be show a helper text */
  help?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  options?: Maybe<Array<SurveyQuestionOption>>;
  question?: Maybe<Scalars['String']>;
  type?: Maybe<SurveyQuestionType>;
};

export type SurveyQuestionOption = {
  __typename?: 'SurveyQuestionOption';
  key: Scalars['String'];
  text: Scalars['String'];
};

export enum SurveyQuestionType {
  MultipleChoice = 'MULTIPLE_CHOICE',
  SingleChoice = 'SINGLE_CHOICE',
  Value = 'VALUE'
}

export type SurveySubmission = {
  __typename?: 'SurveySubmission';
  answers?: Maybe<Array<SurveySubmissionAnswer>>;
  id: Scalars['ID'];
  survey?: Maybe<Survey>;
  user?: Maybe<User>;
};

export type SurveySubmissionAnswer = {
  __typename?: 'SurveySubmissionAnswer';
  question?: Maybe<SurveyQuestion>;
  type?: Maybe<SurveyQuestionType>;
  /** Multiple answers can be sent by passing a comma inbetween */
  value?: Maybe<Scalars['String']>;
};

export type SurveySubmissionDataAnswer = {
  question: Scalars['ID'];
  type?: InputMaybe<SurveyQuestionType>;
  value?: InputMaybe<Scalars['String']>;
};

export type SuveryQuestionOption = {
  key: Scalars['String'];
  text: Scalars['String'];
};

export type Tile = {
  __typename?: 'Tile';
  missionSet?: Maybe<MissionSet>;
  poiSet?: Maybe<PoiSet>;
};

export type TilePaginationList = {
  __typename?: 'TilePaginationList';
  data?: Maybe<Array<GeoJsonFeature>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateCity = {
  id: Scalars['ID'];
  latitude_start?: InputMaybe<Scalars['Float']>;
  latitude_stop?: InputMaybe<Scalars['Float']>;
  longitude_start?: InputMaybe<Scalars['Float']>;
  longitude_stop?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateMission = {
  active?: InputMaybe<Scalars['Boolean']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_type?: InputMaybe<AssetType>;
  deeplink?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  external_id?: InputMaybe<Scalars['String']>;
  /** Stringified JSON input */
  geojson?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  /** Point of interest */
  poi?: InputMaybe<Scalars['ID']>;
  points?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<MissionProvider>;
  settings?: InputMaybe<SetMissionSettings>;
  status?: InputMaybe<MissionStatus>;
  survey?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  topic?: InputMaybe<MissionTopic>;
  type?: InputMaybe<MissionType>;
  validation_amount?: InputMaybe<Scalars['Int']>;
};

export type UpdatePoi = {
  asset?: InputMaybe<Scalars['String']>;
  asset_type?: InputMaybe<AssetType>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PointOfInterestType>;
};

export type UpdateSurvey = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateSurveyQuestion = {
  help?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  options?: InputMaybe<Array<SuveryQuestionOption>>;
  question?: InputMaybe<Scalars['String']>;
  survey?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SurveyQuestionType>;
};

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  city_id?: Maybe<Scalars['String']>;
  /** Unique email address. */
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  /** Unique primary key. */
  id: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  /** Non-unique name. */
  name?: Maybe<Scalars['String']>;
  /** List of permissions */
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserToken = {
  __typename?: 'UserToken';
  refresh_token?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type ExampleMutationMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type ExampleMutationMutation = { __typename?: 'Mutation', login?: { __typename?: 'UserToken', refresh_token?: string | null, token?: string | null } | null };

export type ExampleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQueryQuery = { __typename?: 'Query', cities?: Array<{ __typename?: 'City', id: string } | null> | null };


export const ExampleMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ExampleMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh_token"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<ExampleMutationMutation, ExampleMutationMutationVariables>;
export const ExampleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExampleQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;