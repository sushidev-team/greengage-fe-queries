import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Mixed: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AdSetting = {
  __typename?: 'AdSetting';
  billboard?: Maybe<AdSettingConfig>;
  cad1?: Maybe<AdSettingConfig>;
  cad2?: Maybe<AdSettingConfig>;
  cad3?: Maybe<AdSettingConfig>;
  id: Scalars['ID']['output'];
  left?: Maybe<AdSettingConfig>;
  mobile_bottom?: Maybe<AdSettingConfig>;
  mobile_cad1?: Maybe<AdSettingConfig>;
  mobile_cad2?: Maybe<AdSettingConfig>;
  mobile_top?: Maybe<AdSettingConfig>;
  right1?: Maybe<AdSettingConfig>;
  right2?: Maybe<AdSettingConfig>;
  title?: Maybe<Scalars['String']['output']>;
  top?: Maybe<AdSettingConfig>;
};

export type AdSettingConfig = {
  __typename?: 'AdSettingConfig';
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  yieldLab?: Maybe<Array<AdSettingYieldlab>>;
};

export type AdSettingYieldlab = {
  __typename?: 'AdSettingYieldlab';
  yieldlabAdsCheckId?: Maybe<Scalars['Int']['output']>;
  yieldlabAdslotVal?: Maybe<Scalars['Int']['output']>;
};

export type AmazonProduct = {
  __typename?: 'AmazonProduct';
  /** Brand */
  brand?: Maybe<Scalars['String']['output']>;
  /** Currency */
  currency?: Maybe<Scalars['String']['output']>;
  /** Text description */
  description?: Maybe<Scalars['String']['output']>;
  /** ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Image */
  image?: Maybe<Scalars['String']['output']>;
  /** Price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Savings */
  savings?: Maybe<Scalars['Float']['output']>;
  /** Saving base price */
  savings_base?: Maybe<Scalars['Float']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Link */
  url?: Maybe<Scalars['String']['output']>;
};

export type Article = ArticleInterface & {
  __typename?: 'Article';
  /** Ad settings for the page */
  ad_settings?: Maybe<AdSetting>;
  /** Advertorial entry */
  advertorial?: Maybe<Scalars['Boolean']['output']>;
  /** Which type of text should be visible in lists */
  advertorial_tag?: Maybe<Scalars['String']['output']>;
  /** Returns the text which should be displayed */
  advertorial_tag_text?: Maybe<Scalars['String']['output']>;
  /** Advertorial entry alternative text */
  advertorial_text?: Maybe<Scalars['String']['output']>;
  /** Alternative keywords for the article */
  alt_keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Authors of the article */
  authors?: Maybe<Array<Maybe<User>>>;
  /** Content elements */
  content?: Maybe<Array<Maybe<ContentElement>>>;
  /** Entry is a cornerstone entry */
  cornerstone?: Maybe<Scalars['Boolean']['output']>;
  cover_gallery?: Maybe<Gallery>;
  /** Over Image. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  cover_image?: Maybe<Asset>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  /** Disable ads for the article */
  disable_ads?: Maybe<Scalars['Boolean']['output']>;
  /** Headline of the article. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Should the authors be not visible */
  hide_authors?: Maybe<Scalars['Boolean']['output']>;
  /** Unique primary key. */
  id?: Maybe<Scalars['ID']['output']>;
  /** Interview participants/persons */
  interview_persons?: Maybe<Array<Maybe<Person>>>;
  /** Main key word for the article */
  keyword?: Maybe<Scalars['String']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Oewa data */
  oewa?: Maybe<Oewa>;
  /** Outbrain compliant */
  outbrain_compliant?: Maybe<Scalars['Boolean']['output']>;
  /** Outbrain deactivated */
  outbrain_disabled?: Maybe<Scalars['Boolean']['output']>;
  /** Paid content settings */
  paid_content?: Maybe<PaidContent>;
  /** Url or path for the article. */
  path?: Maybe<Scalars['String']['output']>;
  /** Portal of the article. */
  portal?: Maybe<Scalars['String']['output']>;
  /** Is the entry published  */
  published?: Maybe<Scalars['Boolean']['output']>;
  /** Published at */
  published_at?: Maybe<Scalars['DateTime']['output']>;
  /** Reading time */
  reading_time?: Maybe<Scalars['Int']['output']>;
  /** Ressort */
  ressort?: Maybe<Ressort>;
  /** Similar articles or related articles */
  similar_articles?: Maybe<Array<Maybe<Article>>>;
  /** Slug or alias for the articles. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Full slug. */
  slug_full?: Maybe<Scalars['String']['output']>;
  /** Teaser of the article */
  teaser?: Maybe<Scalars['String']['output']>;
  /** Topics related to this article */
  topics?: Maybe<Array<Maybe<Topic>>>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleCover_ImageArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleSimilar_ArticlesArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleSlugArgs = {
  simple?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArticleTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleInterface = {
  /** Advertorial entry */
  advertorial?: Maybe<Scalars['Boolean']['output']>;
  /** Which type of text should be visible in lists */
  advertorial_tag?: Maybe<Scalars['String']['output']>;
  /** Alternative keywords for the article */
  alt_keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Is this entry a corner stone entry? */
  cornerstone?: Maybe<Scalars['Boolean']['output']>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  /** Headline of the article. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Unique primary key. */
  id?: Maybe<Scalars['ID']['output']>;
  /** Main key word for the article */
  keyword?: Maybe<Scalars['String']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Outbrain compliant */
  outbrain_compliant?: Maybe<Scalars['Boolean']['output']>;
  /** Url or path for the article. */
  path?: Maybe<Scalars['String']['output']>;
  /** Portal of the article. */
  portal?: Maybe<Scalars['String']['output']>;
  /** Is the entry published  */
  published?: Maybe<Scalars['Boolean']['output']>;
  /** Similar articles or related articles */
  similar_articles?: Maybe<Array<Maybe<Article>>>;
  /** Slug or alias for the articles. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Teaser of the article */
  teaser?: Maybe<Scalars['String']['output']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ArticlePaginator = {
  __typename?: 'ArticlePaginator';
  data?: Maybe<Array<Maybe<Article>>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type ArticlePaginatorSimple = {
  __typename?: 'ArticlePaginatorSimple';
  data?: Maybe<Array<Maybe<Article>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type ArticleShort = {
  __typename?: 'ArticleShort';
  /** Cover image url */
  cover_image?: Maybe<Scalars['String']['output']>;
  /** Article headline */
  headline?: Maybe<Scalars['String']['output']>;
  /** The id within the cms */
  id?: Maybe<Scalars['ID']['output']>;
  /** Url the article */
  path?: Maybe<Scalars['String']['output']>;
};

export type ArticleSubscriptionAd = {
  __typename?: 'ArticleSubscriptionAd';
  button_text?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  /** Title that will be displayed on the message */
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Asset = {
  __typename?: 'Asset';
  /** Alt text for asset */
  alt?: Maybe<Scalars['String']['output']>;
  /** Caption */
  caption?: Maybe<Scalars['String']['output']>;
  /** Copyright */
  copyright?: Maybe<Scalars['String']['output']>;
  /** Orignal path to asset */
  external_path?: Maybe<Scalars['String']['output']>;
  file?: Maybe<GlideData>;
  focus_information?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** Height */
  height?: Maybe<Scalars['Int']['output']>;
  /** Id */
  id: Scalars['ID']['output'];
  /** Is audio */
  is_audio?: Maybe<Scalars['Boolean']['output']>;
  /** Is image */
  is_image?: Maybe<Scalars['Boolean']['output']>;
  /** Is video */
  is_video?: Maybe<Scalars['Boolean']['output']>;
  origin?: Maybe<Scalars['String']['output']>;
  /** Original height */
  original_height?: Maybe<Scalars['Int']['output']>;
  /** Original width */
  original_width?: Maybe<Scalars['Int']['output']>;
  /** Path to asset */
  path?: Maybe<Scalars['String']['output']>;
  /** Orignal path to asset */
  path_original?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  /** Width */
  width?: Maybe<Scalars['Int']['output']>;
};


export type AssetCaptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetFileArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated list of Asset items. */
export type AssetPaginator = {
  __typename?: 'AssetPaginator';
  /** A list of Asset items. */
  data: Array<Asset>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Assetable = Movie | Person | Show;

export type BaseInterface = {
  /** Unique primary key. */
  id?: Maybe<Scalars['String']['output']>;
};

export type ChannelDate = {
  __typename?: 'ChannelDate';
  /** Date end */
  date_end?: Maybe<Scalars['DateTime']['output']>;
  /** Human format for the date */
  date_human?: Maybe<Scalars['String']['output']>;
  /** Date start */
  date_start?: Maybe<Scalars['DateTime']['output']>;
};

/** Cinema entry. */
export type Cinema = {
  __typename?: 'Cinema';
  /** City */
  city?: Maybe<City>;
  /** External Id */
  external_id?: Maybe<Scalars['Int']['output']>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** Title of the enitity */
  name?: Maybe<Scalars['String']['output']>;
  /** Showtimes */
  showtimes?: Maybe<CinemaShowtimePaginator>;
  /** Showtimes for today */
  showtimesToday?: Maybe<CinemaShowtimePaginator>;
  /** Showtimes today but only upcoming */
  showtimesUpcoming?: Maybe<CinemaShowtimePaginator>;
  /** Url */
  url?: Maybe<Scalars['String']['output']>;
};


/** Cinema entry. */
export type CinemaShowtimesArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<DateRange>;
};


/** Cinema entry. */
export type CinemaShowtimesTodayArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Cinema entry. */
export type CinemaShowtimesUpcomingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  until?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CinemaDate = {
  __typename?: 'CinemaDate';
  /** Date end */
  date_end?: Maybe<Scalars['DateTime']['output']>;
  /** Human format for the date */
  date_human?: Maybe<Scalars['String']['output']>;
  /** Date start */
  date_start?: Maybe<Scalars['DateTime']['output']>;
};

/** A paginated list of Cinema items. */
export type CinemaPaginator = {
  __typename?: 'CinemaPaginator';
  /** A list of Cinema items. */
  data: Array<Cinema>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CinemaPoster = {
  __typename?: 'CinemaPoster';
  poster?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Cinema showtime entry */
export type CinemaShowtime = {
  __typename?: 'CinemaShowtime';
  /** Auditorium */
  auditorium?: Maybe<Scalars['String']['output']>;
  /** Booking link */
  booking_link?: Maybe<Scalars['String']['output']>;
  /** Cinema */
  cinema?: Maybe<Cinema>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** Movie entry from database */
  movie?: Maybe<Movie>;
  /** Starttime */
  start?: Maybe<Scalars['DateTime']['output']>;
  /** Title of the movie if it doesn not have a relationship to a entry in this service */
  title?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of CinemaShowtime items. */
export type CinemaShowtimePaginator = {
  __typename?: 'CinemaShowtimePaginator';
  /** A list of CinemaShowtime items. */
  data: Array<CinemaShowtime>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** City entry. */
export type City = {
  __typename?: 'City';
  /** Cinemas */
  cinemas?: Maybe<Array<Maybe<Cinema>>>;
  /** External Id */
  external_id?: Maybe<Scalars['Int']['output']>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** Latitude */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** Longitude */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** Title of the enitity */
  name?: Maybe<Scalars['String']['output']>;
  /** State */
  state?: Maybe<Scalars['String']['output']>;
  /** State code */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Zip code */
  zip_code?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of City items. */
export type CityPaginator = {
  __typename?: 'CityPaginator';
  /** A list of City items. */
  data: Array<City>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Collage = {
  __typename?: 'Collage';
  /** Ad settings for the page */
  ad_settings?: Maybe<AdSetting>;
  /** Is an ad? */
  advertorial?: Maybe<Scalars['Boolean']['output']>;
  boxes?: Maybe<Array<Maybe<CollageBox>>>;
  /** Disable ads for the article */
  disable_ads?: Maybe<Scalars['Boolean']['output']>;
  /** Id of the topic */
  id?: Maybe<Scalars['ID']['output']>;
  /** Logo */
  logo?: Maybe<Asset>;
  /** Logo Url */
  logo_url?: Maybe<Scalars['String']['output']>;
  /** Modus for the collage */
  mode?: Maybe<Scalars['String']['output']>;
  /** More teaser is used for boxes */
  more_teaser?: Maybe<Scalars['String']['output']>;
  more_teaser_headline?: Maybe<Scalars['String']['output']>;
  /** More teaser image should be used in an overview box */
  more_teaser_image?: Maybe<Asset>;
  /** Oewa data */
  oewa?: Maybe<Oewa>;
  /** Outbrain compliant */
  outbrain_compliant?: Maybe<Scalars['Boolean']['output']>;
  /** Outbrain deactivated */
  outbrain_disabled?: Maybe<Scalars['Boolean']['output']>;
  /** Portal for the collage */
  portal?: Maybe<Scalars['String']['output']>;
  /** Slug for the topic. Can be used to query the entry */
  slug?: Maybe<Scalars['String']['output']>;
  social_media?: Maybe<Array<Maybe<CollageSocialMedia>>>;
  /** Subhealdine for the topic */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Teaser for this collage */
  teaser?: Maybe<Scalars['String']['output']>;
  /** Title of the topic */
  title?: Maybe<Scalars['String']['output']>;
};


export type CollageMore_TeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CollageMore_Teaser_ImageArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type CollageTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollageBox = {
  __typename?: 'CollageBox';
  /** Description for this collage box */
  description?: Maybe<Scalars['String']['output']>;
  /** Hide the complete box? */
  hide?: Maybe<Scalars['Boolean']['output']>;
  /** Image pre hover */
  image?: Maybe<Asset>;
  /** Image hover */
  image_hover?: Maybe<Asset>;
  /** Title for the box */
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type CollageBoxDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CollageBoxImageArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type CollageBoxImage_HoverArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CollagePaginatorSimple = {
  __typename?: 'CollagePaginatorSimple';
  data?: Maybe<Array<Maybe<Collage>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type CollageSocialMedia = {
  __typename?: 'CollageSocialMedia';
  type?: Maybe<SocialMediaType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Collection = {
  __typename?: 'Collection';
  /** Description for the collection */
  description?: Maybe<Scalars['String']['output']>;
  /** Id of entry */
  id?: Maybe<Scalars['String']['output']>;
  /** Items of the collection */
  items?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Slug for the entry */
  slug?: Maybe<Scalars['String']['output']>;
  /** Title for the collection */
  title?: Maybe<Scalars['String']['output']>;
};


export type CollectionDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompanyGroup = {
  __typename?: 'CompanyGroup';
  /** Group title */
  group_title?: Maybe<Scalars['String']['output']>;
  /** Group values */
  values?: Maybe<Array<Maybe<CompanyGroupValue>>>;
};

export type CompanyGroupValue = {
  __typename?: 'CompanyGroupValue';
  /** Item value */
  item?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type CompanyKeyFact = {
  __typename?: 'CompanyKeyFact';
  keyvalue?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ContentElement = ContentElementAffiliateLinks | ContentElementAffiliateLinksSimple | ContentElementCompanyLogo | ContentElementDownload | ContentElementExternalLinks | ContentElementFaqs | ContentElementGallery | ContentElementGallerySimple | ContentElementIframe | ContentElementImage | ContentElementInfobox | ContentElementInfogram | ContentElementInterview | ContentElementList | ContentElementListicle | ContentElementNewsletter | ContentElementPodcastSimple | ContentElementPodigee | ContentElementProcontra | ContentElementProfileCompany | ContentElementProfilePerson | ContentElementProfileTvm | ContentElementQualifio | ContentElementQuote | ContentElementRecipe | ContentElementReference | ContentElementSimilarArticles | ContentElementSocialMedia | ContentElementSubscriptionAd | ContentElementTable | ContentElementTableOfContents | ContentElementTeams | ContentElementText | ContentElementTextimage | ContentElementTicker | ContentElementTopics | ContentElementTracdelight | ContentElementVideo;

export type ContentElementAffiliateLinks = {
  __typename?: 'ContentElementAffiliateLinks';
  /** Partner */
  affiliate_partner?: Maybe<Scalars['String']['output']>;
  /** Style */
  affiliate_style?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Products */
  products?: Maybe<Array<Maybe<AmazonProduct>>>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementAffiliateLinksSimple = {
  __typename?: 'ContentElementAffiliateLinksSimple';
  /** Partner */
  affiliate_partner?: Maybe<Scalars['String']['output']>;
  iframe_url?: Maybe<Scalars['String']['output']>;
};

export type ContentElementCompanyLogo = {
  __typename?: 'ContentElementCompanyLogo';
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Company logo */
  logo?: Maybe<Asset>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Social media links */
  social_media?: Maybe<Array<Maybe<CollageSocialMedia>>>;
  /** This text should be placed after the logo */
  text_after?: Maybe<Scalars['String']['output']>;
  /** This text should be placed before the logo */
  text_before?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ContentElementDownload = {
  __typename?: 'ContentElementDownload';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Files. */
  files?: Maybe<Array<Maybe<Asset>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Source */
  source?: Maybe<Scalars['String']['output']>;
  /** Teaser test for the download. */
  teaser?: Maybe<Scalars['String']['output']>;
};


export type ContentElementDownloadTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentElementExternalLinks = {
  __typename?: 'ContentElementExternalLinks';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Links collection id */
  link_collection_id?: Maybe<Scalars['ID']['output']>;
  /** Links - will be async loaded */
  links?: Maybe<Array<Maybe<Link>>>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementFaqs = {
  __typename?: 'ContentElementFaqs';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Amount of columns */
  columns_amount?: Maybe<Scalars['Int']['output']>;
  /** Questions */
  faqs?: Maybe<Array<Maybe<Faq>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementGallery = {
  __typename?: 'ContentElementGallery';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Autoplay */
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  /** Gallery item */
  gallery?: Maybe<Gallery>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Gallery display mode */
  mode?: Maybe<Scalars['String']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementGallerySimple = {
  __typename?: 'ContentElementGallerySimple';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  columns_amount?: Maybe<Scalars['Int']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  images?: Maybe<Array<Maybe<Asset>>>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementIframe = {
  __typename?: 'ContentElementIframe';
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  iframe_url?: Maybe<Scalars['String']['output']>;
  max_width?: Maybe<Scalars['Int']['output']>;
  min_height?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementImage = Headline & {
  __typename?: 'ContentElementImage';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Caption text for image */
  caption?: Maybe<Scalars['String']['output']>;
  /** Copyright text for image */
  copyright?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Image path. If 'image not resize' is active the height and the fit property will not be used. */
  image?: Maybe<Asset>;
  image_mode?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `image_mode`. */
  image_no_resize?: Maybe<Scalars['Boolean']['output']>;
  no_caption?: Maybe<Scalars['Boolean']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Link for the image */
  url?: Maybe<Scalars['String']['output']>;
};


export type ContentElementImageCaptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ContentElementImageImageArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentElementInfobox = {
  __typename?: 'ContentElementInfobox';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Infobox entries */
  entries?: Maybe<Array<Maybe<Text>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Style */
  style?: Maybe<Scalars['String']['output']>;
};

export type ContentElementInfogram = {
  __typename?: 'ContentElementInfogram';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Infogram ID */
  infogram_id?: Maybe<Scalars['String']['output']>;
  max_width?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementInterview = {
  __typename?: 'ContentElementInterview';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Interview dialog parts */
  dialog?: Maybe<Array<Maybe<InterviewPart>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementList = {
  __typename?: 'ContentElementList';
  items?: Maybe<Array<Maybe<ContentElementListItem>>>;
  mode?: Maybe<Scalars['String']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementListItem = {
  __typename?: 'ContentElementListItem';
  /** Text. */
  description?: Maybe<Scalars['String']['output']>;
  /** Bullet point list item headline */
  headline?: Maybe<Scalars['String']['output']>;
};


export type ContentElementListItemDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentElementListicle = {
  __typename?: 'ContentElementListicle';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  entities?: Maybe<Array<Maybe<EntityEntry>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Listicle items */
  items?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Sorting direction of the listicle */
  listicle_sorting?: Maybe<Scalars['String']['output']>;
  /** Style of the listicle */
  listicle_style?: Maybe<Scalars['String']['output']>;
  /** Type of listicle */
  listicle_type?: Maybe<Scalars['String']['output']>;
};

export type ContentElementNewsletter = {
  __typename?: 'ContentElementNewsletter';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Distribution list id provided by mailion */
  newsletter?: Maybe<Newsletter>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Teaser for the download. */
  teaser?: Maybe<Scalars['String']['output']>;
};


export type ContentElementNewsletterTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentElementPodcastSimple = {
  __typename?: 'ContentElementPodcastSimple';
  /** Description of the episode */
  description?: Maybe<Scalars['String']['output']>;
  /** Image */
  image?: Maybe<Asset>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Podcast title */
  title?: Maybe<Scalars['String']['output']>;
  /** Episode title */
  title_episode?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ContentElementPodcastSimpleDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentElementPodigee = {
  __typename?: 'ContentElementPodigee';
  cover_image?: Maybe<Scalars['String']['output']>;
  episode_id?: Maybe<Scalars['String']['output']>;
  episode_title?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ContentElementProcontra = {
  __typename?: 'ContentElementProcontra';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  contra?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  pro?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementProfileCompany = {
  __typename?: 'ContentElementProfileCompany';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Maybe<CompanyGroup>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Image / Logo */
  image?: Maybe<Asset>;
  /** Industry */
  industry?: Maybe<Scalars['String']['output']>;
  keyfacts?: Maybe<Array<Maybe<CompanyKeyFact>>>;
  link?: Maybe<Scalars['String']['output']>;
  /** Name of the company */
  name?: Maybe<Scalars['String']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};


export type ContentElementProfileCompanyIndustryArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentElementProfilePerson = {
  __typename?: 'ContentElementProfilePerson';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  custom?: Maybe<Array<Maybe<ContentElementProfilePersonItem>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  hide_information?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  links?: Maybe<Array<Maybe<ContentElementProfilePersonLink>>>;
  person?: Maybe<Person>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementProfilePersonItem = {
  __typename?: 'ContentElementProfilePersonItem';
  /** Text. */
  description?: Maybe<Scalars['String']['output']>;
  /** Title for the item */
  headline?: Maybe<Scalars['String']['output']>;
};


export type ContentElementProfilePersonItemDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentElementProfilePersonLink = {
  __typename?: 'ContentElementProfilePersonLink';
  /** Link */
  link?: Maybe<Scalars['String']['output']>;
  /** Link text */
  link_text?: Maybe<Scalars['String']['output']>;
  /**
   * Link text
   * @deprecated Use link_text
   */
  linktext?: Maybe<Scalars['String']['output']>;
  /** Should the link open in a new window */
  target_blank?: Maybe<Scalars['Boolean']['output']>;
};

export type ContentElementProfileTvm = {
  __typename?: 'ContentElementProfileTvm';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Style */
  modus?: Maybe<Scalars['String']['output']>;
  person?: Maybe<Person>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementQualifio = {
  __typename?: 'ContentElementQualifio';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  iframe_url?: Maybe<Scalars['String']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ContentElementQuote = {
  __typename?: 'ContentElementQuote';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Image */
  image?: Maybe<Asset>;
  /** The mode to display the element */
  mode?: Maybe<Scalars['String']['output']>;
  /** Quote */
  quote?: Maybe<Quote>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementRecipe = {
  __typename?: 'ContentElementRecipe';
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  ingredients?: Maybe<Array<Maybe<ContentElementRecipeIngridient>>>;
  recipe_level?: Maybe<Scalars['String']['output']>;
  recipe_time?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  steps?: Maybe<Array<Maybe<ContentElementRecipeStep>>>;
};

export type ContentElementRecipeIngridient = {
  __typename?: 'ContentElementRecipeIngridient';
  amount?: Maybe<Scalars['String']['output']>;
  ingredient?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentElementRecipeStep = {
  __typename?: 'ContentElementRecipeStep';
  /** Image */
  image?: Maybe<Asset>;
  /** Text. */
  text?: Maybe<Scalars['String']['output']>;
};


export type ContentElementRecipeStepTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentElementReference = {
  __typename?: 'ContentElementReference';
  links?: Maybe<Array<ContentElementReferenceLink>>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementReferenceLink = {
  __typename?: 'ContentElementReferenceLink';
  /** Link to the reference */
  link?: Maybe<Scalars['String']['output']>;
  /** Link text. */
  link_text?: Maybe<Scalars['String']['output']>;
  /** Link should open in new tab or window */
  target_blank?: Maybe<Scalars['Boolean']['output']>;
};

export type ContentElementSimilarArticles = {
  __typename?: 'ContentElementSimilarArticles';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  keyword?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  similar_articles?: Maybe<Array<Maybe<Article>>>;
};


export type ContentElementSimilarArticlesSimilar_ArticlesArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentElementSocialEmbed = {
  __typename?: 'ContentElementSocialEmbed';
  /** The unique identifier to embed the element */
  id?: Maybe<Scalars['String']['output']>;
  /** Type of social embed */
  network?: Maybe<Scalars['String']['output']>;
};

export type ContentElementSocialMedia = {
  __typename?: 'ContentElementSocialMedia';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Will be ignores for twitter */
  height?: Maybe<Scalars['Int']['output']>;
  /** Network (like facebook,twitter etc.) */
  network?: Maybe<SocialMediaNetwork>;
  /** The actual id for the entry */
  network_id?: Maybe<Scalars['String']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementSubscriptionAd = {
  __typename?: 'ContentElementSubscriptionAd';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
};

export type ContentElementTable = {
  __typename?: 'ContentElementTable';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Caption for the table */
  caption?: Maybe<Scalars['String']['output']>;
  /** Widths in fr unit */
  columns_width?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** Requires loading by client */
  file?: Maybe<Scalars['String']['output']>;
  /** First column is a header column */
  first_column_header?: Maybe<Scalars['Boolean']['output']>;
  /** First row is a header row */
  first_row_header?: Maybe<Scalars['Boolean']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Last column is a 'header' row */
  last_row_header?: Maybe<Scalars['Boolean']['output']>;
  /** Requires loading by client */
  manual_loading_required?: Maybe<Scalars['Boolean']['output']>;
  /** Data rows */
  rows?: Maybe<Array<Maybe<TableRow>>>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Sortable columns */
  sortable_columns?: Maybe<Scalars['Boolean']['output']>;
  /** Type */
  type?: Maybe<Scalars['String']['output']>;
};


export type ContentElementTableCaptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentElementTableOfContents = {
  __typename?: 'ContentElementTableOfContents';
  /** List of headlines as a tree */
  list?: Maybe<Array<Maybe<ContentElementTableOfContentsChild>>>;
  /** Should the table of content be open */
  list_expanded?: Maybe<Scalars['Boolean']['output']>;
  /** Max level */
  max_level?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementTableOfContentsChild = {
  __typename?: 'ContentElementTableOfContentsChild';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Children */
  children?: Maybe<Array<Maybe<ContentElementTableOfContentsChild>>>;
  /** Headline */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** ID */
  id?: Maybe<Scalars['String']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};

export type ContentElementTeams = {
  __typename?: 'ContentElementTeams';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** Display mode for the list */
  mode?: Maybe<Scalars['String']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  teams?: Maybe<Array<Maybe<Team>>>;
};

export type ContentElementText = Headline & {
  __typename?: 'ContentElementText';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Text. */
  text?: Maybe<Scalars['String']['output']>;
};


export type ContentElementTextTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentElementTextimage = {
  __typename?: 'ContentElementTextimage';
  /** Image */
  image?: Maybe<Asset>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Text for the box */
  text?: Maybe<Scalars['String']['output']>;
};

export type ContentElementTicker = {
  __typename?: 'ContentElementTicker';
  show_percent?: Maybe<Scalars['Int']['output']>;
  ticker_text?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentElementTickerTicker_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentElementTopics = {
  __typename?: 'ContentElementTopics';
  /** Articles */
  articles?: Maybe<ArticlePaginatorSimple>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
};


export type ContentElementTopicsArticlesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentElementTracdelight = {
  __typename?: 'ContentElementTracdelight';
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Tracdelight widget id */
  widget?: Maybe<Scalars['String']['output']>;
};

export type ContentElementVideo = Headline & {
  __typename?: 'ContentElementVideo';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Caption text for video */
  caption?: Maybe<Scalars['String']['output']>;
  /** Copyright text for video */
  copyright?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  /** JWPlayer Embed Code */
  jw_embed?: Maybe<Scalars['String']['output']>;
  /** JWPlayer Id */
  jw_player?: Maybe<Scalars['String']['output']>;
  /** Path */
  path?: Maybe<Scalars['String']['output']>;
  show_percent?: Maybe<Scalars['Int']['output']>;
  /** Video source */
  video_source?: Maybe<Scalars['String']['output']>;
  /** Youtube Id */
  youtube?: Maybe<Scalars['String']['output']>;
};


export type ContentElementVideoCaptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CountryState = {
  __typename?: 'CountryState';
  /** Code */
  state_code?: Maybe<Scalars['String']['output']>;
  /** Text */
  state_text?: Maybe<Scalars['String']['output']>;
};

export type CreateArticle = {
  advertorial?: InputMaybe<Scalars['Boolean']['input']>;
  advertorial_text?: InputMaybe<Scalars['String']['input']>;
  alt_keywords?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  apa_id?: InputMaybe<Scalars['String']['input']>;
  authors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Array<InputMaybe<CreateArticleContent>>>;
  cornerstone?: InputMaybe<Scalars['Boolean']['input']>;
  cover_image?: InputMaybe<Scalars['String']['input']>;
  cover_image_alt?: InputMaybe<Scalars['String']['input']>;
  cover_image_caption?: InputMaybe<Scalars['String']['input']>;
  cover_image_copyright?: InputMaybe<Scalars['String']['input']>;
  cover_image_title?: InputMaybe<Scalars['String']['input']>;
  disable_ads?: InputMaybe<Scalars['Boolean']['input']>;
  google_news_title?: InputMaybe<Scalars['String']['input']>;
  headline: Scalars['String']['input'];
  hide_authors?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  import_id?: InputMaybe<Scalars['String']['input']>;
  import_url?: InputMaybe<Scalars['String']['input']>;
  interview_persons?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  oewa?: InputMaybe<Scalars['String']['input']>;
  og_description?: InputMaybe<Scalars['String']['input']>;
  og_image?: InputMaybe<Scalars['String']['input']>;
  og_title?: InputMaybe<Scalars['String']['input']>;
  outbrain_compliant?: InputMaybe<Scalars['Boolean']['input']>;
  outbrain_disabled?: InputMaybe<Scalars['Boolean']['input']>;
  portal: Scalars['String']['input'];
  published?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  teaser: Scalars['String']['input'];
  topics?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter_description?: InputMaybe<Scalars['String']['input']>;
  twitter_title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArticleContent = {
  alt?: InputMaybe<Scalars['String']['input']>;
  anchor?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  column_casting?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  /** CSV File url if the content is a csv file */
  csv_file?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Podcast id from podigee */
  episode_id?: InputMaybe<Scalars['String']['input']>;
  /** Files for download */
  files?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Define if the first column of the table is a header */
  first_column_header?: InputMaybe<Scalars['Boolean']['input']>;
  /** Define if the first row of the table is a header */
  first_row_header?: InputMaybe<Scalars['Boolean']['input']>;
  has_anchor?: InputMaybe<Scalars['Boolean']['input']>;
  has_headline?: InputMaybe<Scalars['Boolean']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_level?: InputMaybe<Scalars['Int']['input']>;
  /** Iframe url for iframes */
  iframe_url?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_alt?: InputMaybe<Scalars['String']['input']>;
  image_link?: InputMaybe<Scalars['String']['input']>;
  image_mode?: InputMaybe<Scalars['String']['input']>;
  image_no_resize?: InputMaybe<Scalars['Boolean']['input']>;
  image_title?: InputMaybe<Scalars['String']['input']>;
  /** Keyfacts */
  infobox_content?: InputMaybe<Array<InputMaybe<CreateArticleContentInfobox>>>;
  /** JW-Id for the video player */
  jw?: InputMaybe<Scalars['String']['input']>;
  /** Define if the last row is a header */
  last_row_header?: InputMaybe<Scalars['Boolean']['input']>;
  listitems?: InputMaybe<Array<InputMaybe<CreateArticleListItem>>>;
  /** Iframe min height */
  min_height?: InputMaybe<Scalars['Int']['input']>;
  /** Lists can have a style mode like bullet */
  mode?: InputMaybe<Scalars['String']['input']>;
  /** Socialmedia Network type */
  network?: InputMaybe<Scalars['String']['input']>;
  /** Socialmedia Network id */
  network_id?: InputMaybe<Scalars['String']['input']>;
  no_caption?: InputMaybe<Scalars['Boolean']['input']>;
  /** Quote text */
  quote?: InputMaybe<Scalars['String']['input']>;
  recipe?: InputMaybe<CreateArticleRecipe>;
  /** Define if the columns of are sortable */
  sortable_columns?: InputMaybe<Scalars['Boolean']['input']>;
  /** Source fo the download */
  source?: InputMaybe<Scalars['String']['input']>;
  /** Table source type */
  source_type?: InputMaybe<Scalars['String']['input']>;
  table_content?: InputMaybe<CreateArticleTable>;
  /** Table of content headline size */
  table_of_contents?: InputMaybe<Scalars['String']['input']>;
  /** Teaser for download */
  teaser?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  video_file?: InputMaybe<Scalars['String']['input']>;
  video_source?: InputMaybe<Scalars['String']['input']>;
  video_url?: InputMaybe<Scalars['String']['input']>;
  /** Widget ID */
  widget?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArticleContentInfobox = {
  content?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArticleListItem = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArticleRecipe = {
  ingredients?: InputMaybe<Array<InputMaybe<CreateArticleRecipeIngridient>>>;
  recipe_level?: InputMaybe<Scalars['String']['input']>;
  recipe_time?: InputMaybe<Scalars['Int']['input']>;
  recipe_type?: InputMaybe<Scalars['String']['input']>;
  steps?: InputMaybe<Array<InputMaybe<CreateArticleRecipeStep>>>;
};

export type CreateArticleRecipeIngridient = {
  amount?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ingredient?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArticleRecipeStep = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_alt?: InputMaybe<Scalars['String']['input']>;
  image_caption?: InputMaybe<Scalars['String']['input']>;
  image_copyright?: InputMaybe<Scalars['String']['input']>;
  image_title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArticleTable = {
  rows?: InputMaybe<Array<CreateArticleTableRow>>;
  widths?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type CreateArticleTableColumn = {
  copyright?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArticleTableRow = {
  columns?: InputMaybe<Array<CreateArticleTableColumn>>;
};

export type CustomerRegistrationResult = {
  __typename?: 'CustomerRegistrationResult';
  /** This code will only be present if an error occurs */
  error_code?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum CustomerSalutation {
  An = 'AN',
  Firma = 'FIRMA',
  Frau = 'FRAU',
  Herr = 'HERR'
}

export type CustomerUser = {
  __typename?: 'CustomerUser';
  address?: Maybe<CustomerUserAddress>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
};

export type CustomerUserAddress = {
  __typename?: 'CustomerUserAddress';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type DateRange = {
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
};

export enum DateType {
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at'
}

export type DefaultPaginator = {
  __typename?: 'DefaultPaginator';
  count?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  firstItem?: Maybe<Scalars['Int']['output']>;
  hasMorePages?: Maybe<Scalars['Boolean']['output']>;
  lastItem?: Maybe<Scalars['Int']['output']>;
  lastPage?: Maybe<Scalars['Int']['output']>;
  perPage?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** Entity entry. */
export type Entity = {
  __typename?: 'Entity';
  /** Asset id backdrop image */
  asset_backdrop_id?: Maybe<Scalars['String']['output']>;
  /** Asset id cover image */
  asset_id?: Maybe<Scalars['String']['output']>;
  /** Backdrop image */
  backdrop_image?: Maybe<Asset>;
  /** cover image */
  cover_image?: Maybe<Asset>;
  /** Unique primary key. */
  id?: Maybe<Scalars['String']['output']>;
  /** Slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Summary */
  summary?: Maybe<Scalars['String']['output']>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']['output']>;
  /** TMDB Id */
  tmdb_id?: Maybe<Scalars['String']['output']>;
  /** Tmdb Score */
  tmdb_score?: Maybe<Scalars['Float']['output']>;
  /** Type of the enitity */
  type?: Maybe<Scalars['String']['output']>;
  /** Year */
  year?: Maybe<Scalars['Int']['output']>;
};


/** Entity entry. */
export type EntitySummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EntityEntry = Movie | Show;

export type EntityInterface = {
  /** Asset id cover image */
  asset_id?: Maybe<Scalars['String']['output']>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** IMDB Id */
  imdb_id?: Maybe<Scalars['String']['output']>;
  /** Published */
  published?: Maybe<Scalars['Boolean']['output']>;
  /** Run time */
  runtime?: Maybe<Scalars['Int']['output']>;
  /** Shorttitle of the enitity */
  short?: Maybe<Scalars['String']['output']>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']['output']>;
  /** TMDB Id */
  tmdb_id?: Maybe<Scalars['String']['output']>;
  /** Score */
  tmdb_score?: Maybe<Scalars['Float']['output']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  /** Year of release */
  year?: Maybe<Scalars['Int']['output']>;
};

export type EntityPaginationList = {
  __typename?: 'EntityPaginationList';
  data?: Maybe<Array<Maybe<EntityEntry>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Entry = Article | Collage | Page | Redirect | Ressort | SubscriptionPage | Topic;

/** Season episode entry. */
export type Episode = BaseInterface & {
  __typename?: 'Episode';
  actor_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Article ids */
  article_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Image for the episode */
  asset?: Maybe<Asset>;
  /** The main image for this episode. */
  asset_id?: Maybe<Scalars['String']['output']>;
  /** Assets for the person */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  crew_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** flat list of director ids for the episode */
  director_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** directors for the episode */
  directors?: Maybe<PersonPaginationList>;
  /** Enriched data  */
  enriched?: Maybe<Scalars['Boolean']['output']>;
  /** Genre ids for the movie */
  genre_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Genres for the movie */
  genres?: Maybe<Array<Maybe<Genre>>>;
  /** Unique primary key. */
  id?: Maybe<Scalars['String']['output']>;
  /** Imdb id */
  imdb_id?: Maybe<Scalars['String']['output']>;
  /** Id within the justwatch api */
  justwatch_id?: Maybe<Scalars['String']['output']>;
  /** Watch links */
  links?: Maybe<Array<Maybe<WatchLink>>>;
  /** Mediapress content id */
  mediapress_id?: Maybe<Scalars['String']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Episode number */
  nr?: Maybe<Scalars['Int']['output']>;
  /** persons for the show */
  persons?: Maybe<PersonPaginationList>;
  /** Pubslihed */
  published?: Maybe<Scalars['Boolean']['output']>;
  /** Release date */
  release_date?: Maybe<Scalars['String']['output']>;
  /** Review */
  review?: Maybe<Scalars['String']['output']>;
  /** Reviewed data  */
  reviewed?: Maybe<Scalars['Boolean']['output']>;
  /** Runtime of the single episode */
  runtime?: Maybe<Scalars['Int']['output']>;
  /** Season */
  season?: Maybe<Season>;
  /** Season */
  show?: Maybe<Season>;
  /** Id of the show */
  show_id?: Maybe<Scalars['String']['output']>;
  /** Name of the show */
  show_title?: Maybe<Scalars['String']['output']>;
  /** Showtimes identifier */
  showtimes_id?: Maybe<Scalars['String']['output']>;
  /** Pivot information will only be attached if the querys root is a person. */
  singlePersonMetaInformation?: Maybe<PersonMeta>;
  /** Summary */
  summary?: Maybe<Scalars['String']['output']>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']['output']>;
  /** Tmdb id */
  tmdb_id?: Maybe<Scalars['String']['output']>;
  /** Score of TVMedia */
  tvm_score?: Maybe<Scalars['Int']['output']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  /** Year */
  year?: Maybe<Scalars['String']['output']>;
};


/** Season episode entry. */
export type EpisodeDirectorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Season episode entry. */
export type EpisodeGenresArgs = {
  flat?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Season episode entry. */
export type EpisodePersonsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Season episode entry. */
export type EpisodeReviewArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Season episode entry. */
export type EpisodeSummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A paginated list of Episode items. */
export type EpisodePaginator = {
  __typename?: 'EpisodePaginator';
  /** A list of Episode items. */
  data: Array<Episode>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ExportInformation = {
  __typename?: 'ExportInformation';
  url?: Maybe<Scalars['String']['output']>;
};

export type Faq = {
  __typename?: 'Faq';
  /** Answer */
  answer?: Maybe<Scalars['String']['output']>;
  /** Question */
  question?: Maybe<Scalars['String']['output']>;
};


export type FaqAnswerArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FaqQuestionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Gallery  */
export type Gallery = {
  __typename?: 'Gallery';
  /** ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Description for internal purpose. */
  instructions?: Maybe<Scalars['String']['output']>;
  /** Gallery items */
  items?: Maybe<Array<Maybe<GalleryItem>>>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

/** Gallery asset */
export type GalleryElementAsset = {
  __typename?: 'GalleryElementAsset';
  asset?: Maybe<Asset>;
  image_mode?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** Gallery asset */
export type GalleryElementAssetAssetArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type GalleryElementSocialMediaEmbed = {
  __typename?: 'GalleryElementSocialMediaEmbed';
  /** The unique identifier to embed the element */
  id?: Maybe<Scalars['String']['output']>;
  /** Type of social embed */
  network?: Maybe<Scalars['String']['output']>;
};

export type GalleryItem = GalleryElementAsset | GalleryElementSocialMediaEmbed;

export type Genre = {
  __typename?: 'Genre';
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  /** Id of the Genre */
  id: Scalars['ID']['output'];
  /** Mediapress  id */
  mediapress_id?: Maybe<Scalars['String']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Movies for the person */
  movies?: Maybe<Array<Maybe<Movie>>>;
  /** Shows for the person */
  shows?: Maybe<Array<Maybe<Show>>>;
  /** Slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Sorting */
  sort?: Maybe<Scalars['Int']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Tmdb id */
  tmdb_id?: Maybe<Scalars['String']['output']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};


export type GenreMoviesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type GenreShowsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated list of Genre items. */
export type GenrePaginator = {
  __typename?: 'GenrePaginator';
  /** A list of Genre items. */
  data: Array<Genre>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type GlideData = {
  __typename?: 'GlideData';
  height?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  path_origin?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Global = GlobalAutorevue | GlobalGusto | GlobalNews | GlobalTrend | GlobalTvmedia | GlobalWoman;

export type GlobalAutorevue = {
  __typename?: 'GlobalAutorevue';
  /** Author overview page */
  author_page?: Maybe<Page>;
  /** Newsletter */
  newsletter?: Maybe<Newsletter>;
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
  /** Subscription ad in articles */
  subscription_ad_article?: Maybe<ArticleSubscriptionAd>;
};

export type GlobalGusto = {
  __typename?: 'GlobalGusto';
  /** Author overview page */
  author_page?: Maybe<Page>;
  /** Newsletter */
  newsletter?: Maybe<Newsletter>;
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
  /** Subscription ad in articles */
  subscription_ad_article?: Maybe<ArticleSubscriptionAd>;
};

export type GlobalNews = {
  __typename?: 'GlobalNews';
  /** Author overview page */
  author_page?: Maybe<Page>;
  /** Newsletter */
  newsletter?: Maybe<Newsletter>;
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
  /** Subscription ad in articles */
  subscription_ad_article?: Maybe<ArticleSubscriptionAd>;
};

export type GlobalSet = {
  __typename?: 'GlobalSet';
  settings?: Maybe<Global>;
};

export type GlobalTrend = {
  __typename?: 'GlobalTrend';
  /** Author overview page */
  author_page?: Maybe<Page>;
  /** Newsletter */
  newsletter?: Maybe<Newsletter>;
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
  /** Subscription ad in articles */
  subscription_ad_article?: Maybe<ArticleSubscriptionAd>;
};

export type GlobalTvmedia = {
  __typename?: 'GlobalTvmedia';
  /** Author overview page */
  author_page?: Maybe<Page>;
  /** Newsletter */
  newsletter?: Maybe<Newsletter>;
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
  /** Subscription ad in articles */
  subscription_ad_article?: Maybe<ArticleSubscriptionAd>;
};

export type GlobalWoman = {
  __typename?: 'GlobalWoman';
  /** Author overview page */
  author_page?: Maybe<Page>;
  /** Newsletter */
  newsletter?: Maybe<Newsletter>;
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
  /** Subscription ad in articles */
  subscription_ad_article?: Maybe<ArticleSubscriptionAd>;
};

export type Headline = {
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
};

export type Health = {
  __typename?: 'Health';
  checkId?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type HeroSlide = HeroSlideEntity | HeroSlideServices;

export type HeroSlideEntity = {
  __typename?: 'HeroSlideEntity';
  /** Button text */
  button_text?: Maybe<Scalars['String']['output']>;
  /** Entity entry */
  entity?: Maybe<TvmEntity>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};


export type HeroSlideEntityTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroSlideServices = {
  __typename?: 'HeroSlideServices';
  /** Button link */
  button_link?: Maybe<Scalars['String']['output']>;
  /** Button text */
  button_text?: Maybe<Scalars['String']['output']>;
  /** Services ids */
  services?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};


export type HeroSlideServicesTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum HeroType {
  LandingPage = 'landing_page',
  Slider = 'slider'
}

export type Horoskop = {
  __typename?: 'Horoskop';
  date?: Maybe<Scalars['Date']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  zodiac?: Maybe<HoroskopZodiac>;
};

export type HoroskopBirthday = {
  __typename?: 'HoroskopBirthday';
  headline1?: Maybe<Scalars['String']['output']>;
  headline2?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text1?: Maybe<Scalars['String']['output']>;
  text2?: Maybe<Scalars['String']['output']>;
  zodiac?: Maybe<HoroskopZodiac>;
};

export type HoroskopZodiac = {
  __typename?: 'HoroskopZodiac';
  from?: Maybe<Scalars['Date']['output']>;
  horoskop?: Maybe<Horoskop>;
  horoskop_birthday?: Maybe<HoroskopBirthday>;
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  until?: Maybe<Scalars['Date']['output']>;
};


export type HoroskopZodiacHoroskopArgs = {
  date?: InputMaybe<Scalars['Date']['input']>;
};


export type HoroskopZodiacHoroskop_BirthdayArgs = {
  birthday: Scalars['Date']['input'];
  date?: InputMaybe<Scalars['Date']['input']>;
};

export enum HoroskopZodiacType {
  Aquarius = 'AQUARIUS',
  Aries = 'ARIES',
  Cancer = 'CANCER',
  Capricorn = 'CAPRICORN',
  Gemini = 'GEMINI',
  Leo = 'LEO',
  Libra = 'LIBRA',
  Pisces = 'PISCES',
  Sagittarius = 'SAGITTARIUS',
  Scorpio = 'SCORPIO',
  Taurus = 'TAURUS',
  Virgo = 'VIRGO'
}

/** Image asset */
export type Image = {
  __typename?: 'Image';
  /** Caption */
  caption?: Maybe<Scalars['String']['output']>;
  /** Copyright */
  copyright?: Maybe<Scalars['String']['output']>;
  /** Height */
  height?: Maybe<Scalars['Int']['output']>;
  /** Path to asset */
  path?: Maybe<Scalars['String']['output']>;
  /** Width */
  width?: Maybe<Scalars['Int']['output']>;
};


/** Image asset */
export type ImageCaptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InputChannel = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  article_id?: InputMaybe<Scalars['String']['input']>;
  custom_open_graph_description?: InputMaybe<Scalars['String']['input']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_description?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_title?: InputMaybe<Scalars['String']['input']>;
  google_news_title?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mediapress_id?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  open_graph_description?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  twitter_description?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InputCinema = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InputEpisode = {
  actor_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  article_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  crew_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  custom_open_graph_description?: InputMaybe<Scalars['String']['input']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_description?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_title?: InputMaybe<Scalars['String']['input']>;
  director_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enriched?: InputMaybe<Scalars['Boolean']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  google_news_title?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  imdb_id?: InputMaybe<Scalars['String']['input']>;
  justwatch_id?: InputMaybe<Scalars['String']['input']>;
  mediapress_id?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  open_graph_description?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  reviewed?: InputMaybe<Scalars['Boolean']['input']>;
  showtimes_id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['String']['input']>;
  tmdb_score?: InputMaybe<Scalars['Float']['input']>;
  tvm_score?: InputMaybe<Scalars['Int']['input']>;
  twitter_description?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type InputGenre = {
  custom_open_graph_description?: InputMaybe<Scalars['String']['input']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_description?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_title?: InputMaybe<Scalars['String']['input']>;
  google_news_title?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mediapress_id?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  open_graph_description?: InputMaybe<Scalars['String']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['String']['input']>;
  twitter_description?: InputMaybe<Scalars['String']['input']>;
};

export type InputMovie = {
  actor_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  article_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  asset_backdrop_id?: InputMaybe<Scalars['String']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  crew_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  custom_open_graph_description?: InputMaybe<Scalars['String']['input']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_description?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_title?: InputMaybe<Scalars['String']['input']>;
  director_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enriched?: InputMaybe<Scalars['Boolean']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  google_news_title?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  imdb_id?: InputMaybe<Scalars['String']['input']>;
  justwatch_id?: InputMaybe<Scalars['String']['input']>;
  mediapress_id?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  open_graph_description?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
  release_date?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  reviewed?: InputMaybe<Scalars['Boolean']['input']>;
  showtimes_id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_lg?: InputMaybe<Scalars['String']['input']>;
  text_md?: InputMaybe<Scalars['String']['input']>;
  text_sm?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['String']['input']>;
  tmdb_score?: InputMaybe<Scalars['Float']['input']>;
  tvm_score?: InputMaybe<Scalars['Int']['input']>;
  twitter_description?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type InputPerson = {
  article_id?: InputMaybe<Scalars['String']['input']>;
  article_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  asset_backdrop_id?: InputMaybe<Scalars['String']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  birth_place?: InputMaybe<Scalars['String']['input']>;
  born_at?: InputMaybe<Scalars['Date']['input']>;
  custom_open_graph_description?: InputMaybe<Scalars['String']['input']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_description?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_title?: InputMaybe<Scalars['String']['input']>;
  died_at?: InputMaybe<Scalars['Date']['input']>;
  enriched?: InputMaybe<Scalars['Boolean']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  google_news_title?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  imdb_id?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  movie_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  open_graph_description?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  quotes_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  redirect?: InputMaybe<Scalars['String']['input']>;
  reviewed?: InputMaybe<Scalars['Boolean']['input']>;
  show_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_lg?: InputMaybe<Scalars['String']['input']>;
  text_md?: InputMaybe<Scalars['String']['input']>;
  text_sm?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['String']['input']>;
  tmdb_score?: InputMaybe<Scalars['Float']['input']>;
  twitter_description?: InputMaybe<Scalars['String']['input']>;
};

export type InputPersonable = {
  entries?: InputMaybe<Array<InputMaybe<InputPersonableEntries>>>;
  person_id?: InputMaybe<Scalars['String']['input']>;
  personable_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type InputPersonableEntries = {
  position?: InputMaybe<Scalars['String']['input']>;
  rolename?: InputMaybe<Scalars['String']['input']>;
};

export type InputProvider = {
  article_id?: InputMaybe<Scalars['String']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  custom_open_graph_description?: InputMaybe<Scalars['String']['input']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_description?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_title?: InputMaybe<Scalars['String']['input']>;
  google_news_title?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  open_graph_description?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  twitter_description?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InputQuote = {
  person_id?: InputMaybe<Scalars['String']['input']>;
  quote_id?: InputMaybe<Scalars['String']['input']>;
};

export type InputShow = {
  actor_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  article_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  asset_backdrop_id?: InputMaybe<Scalars['String']['input']>;
  asset_id?: InputMaybe<Scalars['String']['input']>;
  crew_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  custom_open_graph_description?: InputMaybe<Scalars['String']['input']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_description?: InputMaybe<Scalars['String']['input']>;
  custom_twitter_title?: InputMaybe<Scalars['String']['input']>;
  director_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  enriched?: InputMaybe<Scalars['Boolean']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  google_news_title?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imdb_id?: InputMaybe<Scalars['String']['input']>;
  justwatch_id?: InputMaybe<Scalars['String']['input']>;
  mediapress_id?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  open_graph_description?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  reviewed?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_lg?: InputMaybe<Scalars['String']['input']>;
  text_md?: InputMaybe<Scalars['String']['input']>;
  text_sm?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tmdb_id?: InputMaybe<Scalars['String']['input']>;
  tmdb_score?: InputMaybe<Scalars['Float']['input']>;
  tvm_score?: InputMaybe<Scalars['Int']['input']>;
  twitter_description?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type InterviewPart = {
  __typename?: 'InterviewPart';
  person?: Maybe<Person>;
  text?: Maybe<Scalars['String']['output']>;
};


export type InterviewPartTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JwtToken = {
  __typename?: 'JWTToken';
  refresh_token?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Link = {
  __typename?: 'Link';
  /** ID */
  id?: Maybe<Scalars['String']['output']>;
  /** Should the element be opened in a seperat window/tab? */
  target_blank?: Maybe<Scalars['Boolean']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Url */
  url?: Maybe<Scalars['String']['output']>;
};

export type LinkCollection = {
  __typename?: 'LinkCollection';
  /** ID */
  id: Scalars['ID']['output'];
  /** Links */
  links?: Maybe<Array<Maybe<Link>>>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export enum ListicleType {
  Channel = 'CHANNEL',
  Cinema = 'CINEMA',
  CollectionEntry = 'COLLECTION_ENTRY',
  Episode = 'EPISODE',
  Genre = 'GENRE',
  ListicleType = 'ListicleType',
  Manual = 'MANUAL',
  Movie = 'MOVIE',
  Person = 'PERSON',
  Provider = 'PROVIDER',
  Series = 'SERIES',
  Show = 'SHOW'
}

/** Magazine */
export type Magazine = {
  __typename?: 'Magazine';
  /** Image path */
  cover_image?: Maybe<Scalars['String']['output']>;
  /** Id for magazine */
  id: Scalars['ID']['output'];
  /** Url for further redirects */
  path?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};

export type Meta = SeoInterface & {
  __typename?: 'Meta';
  /** Custom open graph description */
  custom_open_graph_description?: Maybe<Scalars['String']['output']>;
  /** Open graph title */
  custom_open_graph_title?: Maybe<Scalars['String']['output']>;
  /** Twitter custom description */
  custom_twitter_description?: Maybe<Scalars['String']['output']>;
  /** Custom twitter title */
  custom_twitter_title?: Maybe<Scalars['String']['output']>;
  /** Google news title */
  google_news_title?: Maybe<Scalars['String']['output']>;
  /** Meta meta_description */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Meta title */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** No follow */
  no_follow?: Maybe<Scalars['Boolean']['output']>;
  /** Should that entry be index */
  no_index?: Maybe<Scalars['Boolean']['output']>;
  /** Open graph description */
  open_graph_description?: Maybe<Scalars['String']['output']>;
  /** Open Graph Image */
  open_graph_image?: Maybe<Scalars['String']['output']>;
  /** Redirect url */
  redirect?: Maybe<Scalars['String']['output']>;
  /** Twitter description mode */
  twitter_description?: Maybe<Scalars['String']['output']>;
  /** Twitter Image */
  twitter_image?: Maybe<Scalars['String']['output']>;
};


export type MetaRedirectArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MoonCalendarDay = {
  __typename?: 'MoonCalendarDay';
  ascendent?: Maybe<HoroskopZodiac>;
  bad_bodycare?: Maybe<Scalars['Boolean']['output']>;
  bad_cleaning?: Maybe<Scalars['Boolean']['output']>;
  bad_cleaning_windows?: Maybe<Scalars['Boolean']['output']>;
  bad_cuthair?: Maybe<Scalars['Boolean']['output']>;
  bad_facecare?: Maybe<Scalars['Boolean']['output']>;
  bad_laundry?: Maybe<Scalars['Boolean']['output']>;
  bad_love?: Maybe<Scalars['Boolean']['output']>;
  bad_nails?: Maybe<Scalars['Boolean']['output']>;
  bad_party?: Maybe<Scalars['Boolean']['output']>;
  bad_planting?: Maybe<Scalars['Boolean']['output']>;
  bad_traveling?: Maybe<Scalars['Boolean']['output']>;
  bad_waterplants?: Maybe<Scalars['Boolean']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  good_bodycare?: Maybe<Scalars['Boolean']['output']>;
  good_cleaning?: Maybe<Scalars['Boolean']['output']>;
  good_cleaning_windows?: Maybe<Scalars['Boolean']['output']>;
  good_cuthair?: Maybe<Scalars['Boolean']['output']>;
  good_facecare?: Maybe<Scalars['Boolean']['output']>;
  good_laundry?: Maybe<Scalars['Boolean']['output']>;
  good_love?: Maybe<Scalars['Boolean']['output']>;
  good_nails?: Maybe<Scalars['Boolean']['output']>;
  good_party?: Maybe<Scalars['Boolean']['output']>;
  good_planting?: Maybe<Scalars['Boolean']['output']>;
  good_traveling?: Maybe<Scalars['Boolean']['output']>;
  good_waterplants?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  moonphase?: Maybe<Scalars['Float']['output']>;
  moonphase_type?: Maybe<Scalars['String']['output']>;
  moonrise?: Maybe<Scalars['String']['output']>;
  moonset?: Maybe<Scalars['String']['output']>;
  sunrise?: Maybe<Scalars['String']['output']>;
  sunset?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  zodiac?: Maybe<HoroskopZodiac>;
};

export type MooncalendarDayPaginationList = {
  __typename?: 'MooncalendarDayPaginationList';
  data?: Maybe<Array<Maybe<MoonCalendarDay>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export enum MooncalendarOptions {
  BadBodycare = 'bad_bodycare',
  BadCleaning = 'bad_cleaning',
  BadCleaningWindows = 'bad_cleaning_windows',
  BadCuthair = 'bad_cuthair',
  BadFacecare = 'bad_facecare',
  BadLaundry = 'bad_laundry',
  BadLove = 'bad_love',
  BadNails = 'bad_nails',
  BadParty = 'bad_party',
  BadPlanting = 'bad_planting',
  BadTraveling = 'bad_traveling',
  BadWaterplants = 'bad_waterplants',
  GoodBodycare = 'good_bodycare',
  GoodCleaning = 'good_cleaning',
  GoodCleaningWindows = 'good_cleaning_windows',
  GoodCuthair = 'good_cuthair',
  GoodFacecare = 'good_facecare',
  GoodLaundry = 'good_laundry',
  GoodLove = 'good_love',
  GoodNails = 'good_nails',
  GoodParty = 'good_party',
  GoodPlanting = 'good_planting',
  GoodTraveling = 'good_traveling',
  GoodWaterplants = 'good_waterplants'
}

/** Movie entry. */
export type Movie = EntityInterface & {
  __typename?: 'Movie';
  actor_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Age rating */
  age_rating?: Maybe<Scalars['String']['output']>;
  /** Article ids */
  article_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Asset id backdrop image */
  asset_backdrop_id?: Maybe<Scalars['String']['output']>;
  /** Asset id cover image */
  asset_id?: Maybe<Scalars['String']['output']>;
  /** Assets for the movie */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Backdrop image */
  backdrop_image?: Maybe<Asset>;
  /** Cinemas */
  cinemas?: Maybe<CinemaPaginator>;
  /** cover image */
  cover_image?: Maybe<Asset>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  crew_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** flat list of director ids for the movie */
  director_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** directors for the movie */
  directors?: Maybe<PersonPaginationList>;
  /** Enriched data  */
  enriched?: Maybe<Scalars['Boolean']['output']>;
  /** Genre ids for the movie */
  genre_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Genres for the movie */
  genres?: Maybe<Array<Maybe<Genre>>>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** Imdb id */
  imdb_id?: Maybe<Scalars['String']['output']>;
  /** Id within the justwatch api */
  justwatch_id?: Maybe<Scalars['String']['output']>;
  /** Watch links */
  links?: Maybe<Array<Maybe<WatchLink>>>;
  /** Mediapress content id */
  mediapress_id?: Maybe<Scalars['String']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Original id is set if the the entry has been transformed */
  original_id?: Maybe<Scalars['String']['output']>;
  /** Original Title of the enitity */
  original_title?: Maybe<Scalars['String']['output']>;
  /** flat list of person ids for the movie */
  person_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** persons for the movie */
  persons?: Maybe<PersonPaginationList>;
  /** Provider */
  provider?: Maybe<Array<Maybe<Provider>>>;
  /** Pubslihed */
  published?: Maybe<Scalars['Boolean']['output']>;
  /** Release Date */
  release_date?: Maybe<Scalars['String']['output']>;
  /** Review */
  review?: Maybe<Scalars['String']['output']>;
  /** Reviewed data  */
  reviewed?: Maybe<Scalars['Boolean']['output']>;
  /** Run time in minutes */
  runtime?: Maybe<Scalars['Int']['output']>;
  /** Shorttitle of the enitity */
  short?: Maybe<Scalars['String']['output']>;
  /** cinema showtimes */
  showtimes?: Maybe<CinemaShowtimePaginator>;
  showtimesAmount?: Maybe<Scalars['Int']['output']>;
  /** Showtimes for today */
  showtimesToday?: Maybe<CinemaShowtimePaginator>;
  /** Showtimes today but only upcoming */
  showtimesUpcoming?: Maybe<CinemaShowtimePaginator>;
  /** Showtimes identifier */
  showtimes_id?: Maybe<Scalars['String']['output']>;
  /** Pivot information will only be attached if the querys root is a person. */
  singlePersonMetaInformation?: Maybe<PersonMeta>;
  /** Url-Slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Summary */
  summary?: Maybe<Scalars['String']['output']>;
  /** Tags for the show */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Summary Long */
  text_lg?: Maybe<Scalars['String']['output']>;
  /** Summary Medium */
  text_md?: Maybe<Scalars['String']['output']>;
  /** Summary Small */
  text_sm?: Maybe<Scalars['String']['output']>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']['output']>;
  /** Tmdb id */
  tmdb_id?: Maybe<Scalars['String']['output']>;
  /** Score */
  tmdb_score?: Maybe<Scalars['Float']['output']>;
  /** Trailer for the movie */
  trailer?: Maybe<Array<Maybe<Trailer>>>;
  /** Tv showtimes */
  tvShowtimes?: Maybe<CinemaShowtimePaginator>;
  /** Tv for today */
  tvShowtimesToday?: Maybe<CinemaShowtimePaginator>;
  /** Tv today but only upcoming */
  tvShowtimesUpcoming?: Maybe<CinemaShowtimePaginator>;
  /** Score of TVMedia */
  tvm_score?: Maybe<Scalars['Int']['output']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  /** Year of release */
  year?: Maybe<Scalars['Int']['output']>;
  /** Youtube id */
  youtube?: Maybe<Scalars['String']['output']>;
};


/** Movie entry. */
export type MovieCinemasArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Movie entry. */
export type MovieDirectorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Movie entry. */
export type MovieGenresArgs = {
  flat?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Movie entry. */
export type MoviePersonsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Movie entry. */
export type MovieReviewArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Movie entry. */
export type MovieShowtimesArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<DateRange>;
};


/** Movie entry. */
export type MovieShowtimesTodayArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Movie entry. */
export type MovieShowtimesUpcomingArgs = {
  cinema?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  until?: InputMaybe<Scalars['DateTime']['input']>;
};


/** Movie entry. */
export type MovieSummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Movie entry. */
export type MovieText_LgArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Movie entry. */
export type MovieText_MdArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Movie entry. */
export type MovieText_SmArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Movie entry. */
export type MovieTvShowtimesArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<DateRange>;
};


/** Movie entry. */
export type MovieTvShowtimesTodayArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Movie entry. */
export type MovieTvShowtimesUpcomingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  until?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MoviePaginationList = {
  __typename?: 'MoviePaginationList';
  data?: Maybe<Array<Maybe<Movie>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

/** A paginated list of Movie items. */
export type MoviePaginator = {
  __typename?: 'MoviePaginator';
  /** A list of Movie items. */
  data: Array<Movie>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type MoviesPaginationList = {
  __typename?: 'MoviesPaginationList';
  data?: Maybe<Array<Maybe<Movie>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addReportToTT500Company?: Maybe<Tt500FinanceReport>;
  articleCreate?: Maybe<Article>;
  checkValidProduct?: Maybe<Scalars['Boolean']['output']>;
  createTT500Company?: Maybe<Tt500Company>;
  createTT500Person?: Maybe<Tt500Person>;
  customerChangePassword?: Maybe<Scalars['Boolean']['output']>;
  customerCheckEmailExists?: Maybe<Scalars['Boolean']['output']>;
  customerLogin?: Maybe<JwtToken>;
  customerLogout?: Maybe<Scalars['Boolean']['output']>;
  customerRegister?: Maybe<CustomerRegistrationResult>;
  customerRegisterFromCustomer?: Maybe<CustomerRegistrationResult>;
  customerSetPassword?: Maybe<Scalars['Boolean']['output']>;
  deleteQuote?: Maybe<Scalars['Boolean']['output']>;
  deleteTT500Company?: Maybe<Scalars['Boolean']['output']>;
  deleteTT500Person?: Maybe<Scalars['Boolean']['output']>;
  exportMovies?: Maybe<ExportInformation>;
  exportPersons?: Maybe<ExportInformation>;
  exportShows?: Maybe<ExportInformation>;
  ping?: Maybe<Scalars['String']['output']>;
  pingAuthenticated?: Maybe<Scalars['String']['output']>;
  resolveHtml?: Maybe<Scalars['String']['output']>;
  /** Will trigger the resync for a movie */
  resyncMovie?: Maybe<Scalars['Boolean']['output']>;
  /** Will trigger the resync for a person */
  resyncPerson?: Maybe<Scalars['Boolean']['output']>;
  /** Will trigger the resync for a show */
  resyncShow?: Maybe<Scalars['Boolean']['output']>;
  subscribeToNewsletter?: Maybe<NewsletterSubcriptionResult>;
  updateChannel?: Maybe<TvChannel>;
  updateCinema?: Maybe<Cinema>;
  updateEpisode?: Maybe<Episode>;
  updateGenre?: Maybe<Genre>;
  updateMooncalendar?: Maybe<MoonCalendarDay>;
  updateMovie?: Maybe<Movie>;
  updatePerson?: Maybe<Person>;
  updatePersonables?: Maybe<Scalars['Boolean']['output']>;
  updateProvider?: Maybe<Provider>;
  updateQuote?: Maybe<Scalars['String']['output']>;
  updateShow?: Maybe<Show>;
  updateTT500Company?: Maybe<Tt500Company>;
  updateTT500Person?: Maybe<Tt500Person>;
  /** Upload a file that is publicly available. */
  uploadAsset?: Maybe<Asset>;
};


export type MutationAddReportToTt500CompanyArgs = {
  company?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Tt500CompanyReport>;
};


export type MutationArticleCreateArgs = {
  data?: InputMaybe<CreateArticle>;
};


export type MutationCheckValidProductArgs = {
  product?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateTt500CompanyArgs = {
  data?: InputMaybe<Tt500CreateCompany>;
};


export type MutationCreateTt500PersonArgs = {
  data?: InputMaybe<Tt500CreatePerson>;
};


export type MutationCustomerChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  newPasswordConfirm: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationCustomerCheckEmailExistsArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCustomerRegisterArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gdpr: Scalars['Boolean']['input'];
  lastName: Scalars['String']['input'];
  marketing: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  salutation: CustomerSalutation;
  sms: Scalars['Boolean']['input'];
  terms: Scalars['Boolean']['input'];
};


export type MutationCustomerRegisterFromCustomerArgs = {
  customerId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gdpr: Scalars['Boolean']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  terms: Scalars['Boolean']['input'];
};


export type MutationCustomerSetPasswordArgs = {
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationDeleteQuoteArgs = {
  data?: InputMaybe<InputQuote>;
};


export type MutationDeleteTt500CompanyArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteTt500PersonArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPingArgs = {
  value?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPingAuthenticatedArgs = {
  value?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResolveHtmlArgs = {
  html?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResyncMovieArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResyncPersonArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResyncShowArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSubscribeToNewsletterArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  newsletter?: InputMaybe<Scalars['ID']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateChannelArgs = {
  data?: InputMaybe<InputChannel>;
};


export type MutationUpdateCinemaArgs = {
  data?: InputMaybe<InputCinema>;
};


export type MutationUpdateEpisodeArgs = {
  data?: InputMaybe<InputEpisode>;
};


export type MutationUpdateGenreArgs = {
  data?: InputMaybe<InputGenre>;
};


export type MutationUpdateMooncalendarArgs = {
  data?: InputMaybe<UpdateMooncalendarInput>;
};


export type MutationUpdateMovieArgs = {
  data?: InputMaybe<InputMovie>;
};


export type MutationUpdatePersonArgs = {
  data?: InputMaybe<InputPerson>;
};


export type MutationUpdatePersonablesArgs = {
  data?: InputMaybe<InputPersonable>;
};


export type MutationUpdateProviderArgs = {
  data?: InputMaybe<InputProvider>;
};


export type MutationUpdateQuoteArgs = {
  data?: InputMaybe<InputQuote>;
};


export type MutationUpdateShowArgs = {
  data?: InputMaybe<InputShow>;
};


export type MutationUpdateTt500CompanyArgs = {
  data?: InputMaybe<Tt500UpdateCompany>;
};


export type MutationUpdateTt500PersonArgs = {
  data?: InputMaybe<Tt500UpdatePerson>;
};


export type MutationUploadAssetArgs = {
  file?: InputMaybe<Scalars['Upload']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Navigation list for a portal. */
export type Navigation = {
  __typename?: 'Navigation';
  /** Handle. */
  handle?: Maybe<Scalars['String']['output']>;
  /** Unique primary key. */
  id?: Maybe<Scalars['String']['output']>;
  /** Items */
  items?: Maybe<Array<Maybe<NavigationItem>>>;
  /** Title. */
  title?: Maybe<Scalars['String']['output']>;
};

/** Navigation list item for a navigation. */
export type NavigationItem = {
  __typename?: 'NavigationItem';
  /** Children. */
  children?: Maybe<Array<Maybe<NavigationItem>>>;
  /** Unique primary key. */
  id?: Maybe<Scalars['String']['output']>;
  /** Is it a title element without a clickable text? */
  only_title?: Maybe<Scalars['Boolean']['output']>;
  /** Additional parameter */
  parameter?: Maybe<Scalars['String']['output']>;
  /** Slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Title. */
  title?: Maybe<Scalars['String']['output']>;
  /** Type of navigation item. */
  type?: Maybe<Scalars['String']['output']>;
  /** Url. */
  url?: Maybe<Scalars['String']['output']>;
};

export type Newsletter = {
  __typename?: 'Newsletter';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** The slug is required to fetch the newsletter */
  slug?: Maybe<Scalars['String']['output']>;
  /** Title for the newsletter - will be shown on the content element */
  title?: Maybe<Scalars['String']['output']>;
};


export type NewsletterDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewsletterSubcriptionResult = {
  __typename?: 'NewsletterSubcriptionResult';
  redirect_url?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type NowEntryItem = CinemaShowtime | TvChannelShowtime;

/** A paginated list of NowEntryItem items. */
export type NowEntryItemPaginator = {
  __typename?: 'NowEntryItemPaginator';
  /** A list of NowEntryItem items. */
  data: Array<NowEntryItem>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Oewa = {
  __typename?: 'Oewa';
  /** Category key */
  category_key?: Maybe<Scalars['String']['output']>;
  /** Category id */
  id?: Maybe<Scalars['String']['output']>;
  /** Page key */
  page_key?: Maybe<Scalars['String']['output']>;
  /** Profile key */
  profile_key?: Maybe<Scalars['String']['output']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
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

export type Page = {
  __typename?: 'Page';
  /** Ad settings for the page */
  ad_settings?: Maybe<AdSetting>;
  /** Content */
  content?: Maybe<Array<Maybe<PageContentElement>>>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  /** Disable ads for the article */
  disable_ads?: Maybe<Scalars['Boolean']['output']>;
  /** Id */
  id?: Maybe<Scalars['ID']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** More teaser is used for boxes */
  more_teaser?: Maybe<Scalars['String']['output']>;
  more_teaser_headline?: Maybe<Scalars['String']['output']>;
  /** More teaser image should be used in an overview box */
  more_teaser_image?: Maybe<Asset>;
  /** Oewa data */
  oewa?: Maybe<Oewa>;
  /** Outbrain compliant */
  outbrain_compliant?: Maybe<Scalars['Boolean']['output']>;
  /** Outbrain deactivated */
  outbrain_disabled?: Maybe<Scalars['Boolean']['output']>;
  /** Url of the page */
  path?: Maybe<Scalars['String']['output']>;
  /** Is the entry published  */
  published?: Maybe<Scalars['Boolean']['output']>;
  /** Show title */
  show_title?: Maybe<Scalars['Boolean']['output']>;
  /** Slug of the page */
  slug?: Maybe<Scalars['String']['output']>;
  /** Full slug of the page */
  slug_full?: Maybe<Scalars['String']['output']>;
  /** Title of the page */
  title?: Maybe<Scalars['String']['output']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};


export type PageMore_TeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageMore_Teaser_ImageArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type PageSlugArgs = {
  simple?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageContentElement = PageContentElementAll | PageContentElementArticles | PageContentElementArticlesApa | PageContentElementArticlesIds | PageContentElementArticlesRessort | PageContentElementBoxes | PageContentElementEntityAd | PageContentElementEntitySearchPage | PageContentElementHero | PageContentElementHeroImages | PageContentElementHorizontalPanels | PageContentElementListicles | PageContentElementNewsletterBoxes | PageContentElementSpecial | PageContentElementStage | PageContentElementSubscriptionAd | PageContentElementTeams;

export type PageContentElementAll = {
  __typename?: 'PageContentElementAll';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Array<Maybe<ContentElement>>>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
};

export type PageContentElementArticles = {
  __typename?: 'PageContentElementArticles';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']['output']>;
  /** Mode */
  mode?: Maybe<Scalars['String']['output']>;
  /** Show images */
  show_images?: Maybe<Scalars['Boolean']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
};

export type PageContentElementArticlesApa = {
  __typename?: 'PageContentElementArticlesApa';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']['output']>;
  /** Mode */
  mode?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
};

export type PageContentElementArticlesIds = {
  __typename?: 'PageContentElementArticlesIds';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']['output']>;
  /** Mode */
  mode?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
};

export type PageContentElementArticlesRessort = {
  __typename?: 'PageContentElementArticlesRessort';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']['output']>;
  /** Mode */
  mode?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
};

export type PageContentElementBoxes = {
  __typename?: 'PageContentElementBoxes';
  entries?: Maybe<Array<Entry>>;
};

export type PageContentElementEntityAd = {
  __typename?: 'PageContentElementEntityAd';
  /** Link url */
  cta_link?: Maybe<Scalars['String']['output']>;
  /** Link text */
  cta_text?: Maybe<Scalars['String']['output']>;
  /** Asset for this entry */
  custom_asset?: Maybe<Asset>;
  /** Entity entry */
  entity?: Maybe<TvmEntity>;
  /** Entity id */
  entity_id?: Maybe<Scalars['String']['output']>;
  /** Title or headline */
  headline?: Maybe<Scalars['String']['output']>;
  /** Is this entry an ad */
  mark_as_ad?: Maybe<Scalars['Boolean']['output']>;
  /** Provider */
  provider_id?: Maybe<Scalars['String']['output']>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
  /** Type */
  type?: Maybe<Scalars['String']['output']>;
  /** Use a connection to provider */
  use_provider?: Maybe<Scalars['Boolean']['output']>;
};


export type PageContentElementEntityAdCustom_AssetArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type PageContentElementEntityAdTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageContentElementEntitySearchPage = {
  __typename?: 'PageContentElementEntitySearchPage';
  type?: Maybe<Scalars['String']['output']>;
};

export type PageContentElementHero = {
  __typename?: 'PageContentElementHero';
  /** Slides of hero element */
  hero_slides?: Maybe<Array<Maybe<HeroSlide>>>;
  /** Type of hero element */
  hero_type?: Maybe<HeroType>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};


export type PageContentElementHeroTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageContentElementHeroImages = {
  __typename?: 'PageContentElementHeroImages';
  /** Title or headline */
  headline?: Maybe<Scalars['String']['output']>;
  /** Images */
  images?: Maybe<Array<Maybe<Asset>>>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
};


export type PageContentElementHeroImagesTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageContentElementHorizonalPanel = {
  __typename?: 'PageContentElementHorizonalPanel';
  headline?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  subheadline?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PageContentElementHorizontalPanels = {
  __typename?: 'PageContentElementHorizontalPanels';
  description?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  panels?: Maybe<Array<Maybe<PageContentElementHorizonalPanel>>>;
};


export type PageContentElementHorizontalPanelsDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageContentElementListicles = {
  __typename?: 'PageContentElementListicles';
  /** List of genre ids */
  genre_filter?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of genre ids which should be excluded */
  genre_filter_excluded?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Ids of items */
  items?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Limit of entries */
  limit?: Maybe<Scalars['String']['output']>;
  /** Listicle type */
  listicle_type?: Maybe<ListicleType>;
  /** Only live events should be used. If listicle type is channel and the query is setting this option has an effect. */
  onlyLive?: Maybe<Scalars['Boolean']['output']>;
  /** Only event that are now should be used. If listicle type is channel and the query is setting this option has an effect. */
  onlyNow?: Maybe<Scalars['Boolean']['output']>;
  /**
   * Only primetime tv entries should be loaded. If listicle type is channel and
   * the query is setting this option has an effect.
   */
  onlyPrimetime?: Maybe<Scalars['Boolean']['output']>;
  /** Only sports tv entries should be loaded. If listicle type is channel and the query is setting this option has an effect. */
  onlySport?: Maybe<Scalars['Boolean']['output']>;
  /** Only entries with asset */
  onlyWithAssets?: Maybe<Scalars['Boolean']['output']>;
  /** GraphQL query mode. */
  query?: Maybe<Scalars['String']['output']>;
  /** Search term */
  searchterm?: Maybe<Scalars['String']['output']>;
  /** Sort by new */
  sortByNew?: Maybe<Scalars['Boolean']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
};

export type PageContentElementNewsletterBoxes = {
  __typename?: 'PageContentElementNewsletterBoxes';
  newsletters?: Maybe<Array<Maybe<Newsletter>>>;
};

export type PageContentElementSpecial = {
  __typename?: 'PageContentElementSpecial';
  /** Backgroud image */
  bg_image?: Maybe<Asset>;
  /** Marquee text */
  marquee_text?: Maybe<Scalars['String']['output']>;
  /** Sheets */
  sheets?: Maybe<Array<Maybe<Sheet>>>;
  /** Type */
  special_type?: Maybe<SpecialType>;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
};


export type PageContentElementSpecialBg_ImageArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type PageContentElementSpecialMarquee_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageContentElementSpecialTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageContentElementStage = {
  __typename?: 'PageContentElementStage';
  items?: Maybe<Array<Maybe<StageElement>>>;
};

export type PageContentElementSubscriptionAd = {
  __typename?: 'PageContentElementSubscriptionAd';
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
};

export type PageContentElementTeams = {
  __typename?: 'PageContentElementTeams';
  /** Display mode for the list */
  mode?: Maybe<Scalars['String']['output']>;
  teams?: Maybe<Array<Maybe<Team>>>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
};

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']['output']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int']['output'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

export type PaidContent = {
  __typename?: 'PaidContent';
  free_from?: Maybe<Scalars['Date']['output']>;
  free_until?: Maybe<Scalars['Date']['output']>;
  is_paid_content?: Maybe<Scalars['Boolean']['output']>;
  paid_content_types?: Maybe<Array<Maybe<PaidContentType>>>;
};

export type PaidContentType = {
  __typename?: 'PaidContentType';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Paywall = {
  __typename?: 'Paywall';
  /** Meta text */
  meta?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Maybe<PaywallProduct>>>;
  /** Text */
  text?: Maybe<Scalars['String']['output']>;
  /** Title for paywall */
  title?: Maybe<Scalars['String']['output']>;
};

export type PaywallProduct = {
  __typename?: 'PaywallProduct';
  /** Defines if the product is marked as best choice for customers */
  best_choice?: Maybe<Scalars['Boolean']['output']>;
  /** Paywall product entry */
  product?: Maybe<SubscriptionAd>;
};

export type PaywallProductMapping = {
  __typename?: 'PaywallProductMapping';
  article_type?: Maybe<Scalars['ID']['output']>;
  article_type_slug?: Maybe<Scalars['String']['output']>;
  article_type_title?: Maybe<Scalars['String']['output']>;
  /** Product ids from the compax system */
  products?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Person information */
export type Person = {
  __typename?: 'Person';
  /** Main Article id */
  article_id?: Maybe<Scalars['String']['output']>;
  /** Article ids */
  article_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Articles */
  articles?: Maybe<Array<Maybe<ArticleShort>>>;
  /** Id for the profile picture */
  asset_id?: Maybe<Scalars['String']['output']>;
  /** Assets for the person */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Birthplace */
  birth_place?: Maybe<Scalars['String']['output']>;
  /** Birthday */
  born_at?: Maybe<Scalars['DateTime']['output']>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  /** Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Deathday */
  died_at?: Maybe<Scalars['DateTime']['output']>;
  /** Edudation information */
  education?: Maybe<Scalars['String']['output']>;
  /** Enriched */
  enriched?: Maybe<Scalars['Boolean']['output']>;
  /** Episode for the person */
  episodes?: Maybe<Array<Maybe<Episode>>>;
  /** Familiy information */
  family?: Maybe<Scalars['String']['output']>;
  /** Gender */
  gender?: Maybe<Scalars['String']['output']>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** Profile image */
  image?: Maybe<Asset>;
  /** Job */
  job?: Maybe<Scalars['String']['output']>;
  /** Pivot information */
  meta?: Maybe<PersonMeta>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Movie ids */
  movie_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Movies for the person */
  movies?: Maybe<MoviePaginationList>;
  /** Interviewed person or part of the interview. */
  name?: Maybe<Scalars['String']['output']>;
  /** Original id is set if the the entry has been transformed */
  original_id?: Maybe<Scalars['String']['output']>;
  /** Published */
  published?: Maybe<Scalars['Boolean']['output']>;
  /** Quote ids */
  quote_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Quotes */
  quotes?: Maybe<Array<Maybe<Quote>>>;
  /** Data reviewed */
  reviewed?: Maybe<Scalars['Boolean']['output']>;
  /** Show ids */
  show_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Shows for the person */
  shows?: Maybe<ShowPaginationList>;
  /** Slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Biography */
  summary?: Maybe<Scalars['String']['output']>;
  /** Tags for the person */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Summary Long */
  text_lg?: Maybe<Scalars['String']['output']>;
  /** Summary Medium */
  text_md?: Maybe<Scalars['String']['output']>;
  /** Summary Small */
  text_sm?: Maybe<Scalars['String']['output']>;
  /** Tmdb id */
  tmdb_id?: Maybe<Scalars['String']['output']>;
  /** Score */
  tmdb_score?: Maybe<Scalars['Float']['output']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};


/** Person information */
export type PersonArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


/** Person information */
export type PersonDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Person information */
export type PersonEducationArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Person information */
export type PersonEpisodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


/** Person information */
export type PersonFamilyArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Person information */
export type PersonMoviesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Person information */
export type PersonQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


/** Person information */
export type PersonShowsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PersonMeta = {
  __typename?: 'PersonMeta';
  /** Positions will only be attached in the correct relation */
  positions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Rolenames will only be attached in the correct relation */
  rolenames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PersonMetaPositionsArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PersonPaginationList = {
  __typename?: 'PersonPaginationList';
  data?: Maybe<Array<Maybe<Person>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Personable = {
  __typename?: 'Personable';
  /** Entity */
  entity?: Maybe<Entity>;
  /** Person id */
  person_id: Scalars['ID']['output'];
  /** Entity model */
  personable_id: Scalars['ID']['output'];
  /** Position */
  position?: Maybe<Scalars['String']['output']>;
  /** Rolename */
  rolename?: Maybe<Scalars['String']['output']>;
};

export type PersonablePaginationList = {
  __typename?: 'PersonablePaginationList';
  data?: Maybe<Array<Maybe<Personable>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type PersonablePosition = {
  __typename?: 'PersonablePosition';
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type PersonsPaginationList = {
  __typename?: 'PersonsPaginationList';
  data?: Maybe<Array<Maybe<Person>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Provider = {
  __typename?: 'Provider';
  /** Article id */
  article_id?: Maybe<Scalars['String']['output']>;
  /** Id for the profile picture */
  asset_id?: Maybe<Scalars['String']['output']>;
  /** Unique Id */
  id: Scalars['ID']['output'];
  /** Provider image */
  image?: Maybe<Asset>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Movies */
  movies?: Maybe<Array<Maybe<Movie>>>;
  /** Name of the provider */
  name?: Maybe<Scalars['String']['output']>;
  /** Phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** Published entry */
  published?: Maybe<Scalars['Boolean']['output']>;
  /** Review */
  review?: Maybe<Scalars['String']['output']>;
  /** Shows */
  shows?: Maybe<Array<Maybe<Show>>>;
  /** Slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Sort */
  sort?: Maybe<Scalars['Int']['output']>;
  /** Type within the service entity */
  type?: Maybe<Scalars['String']['output']>;
  /** Url */
  url?: Maybe<Scalars['String']['output']>;
};


export type ProviderReviewArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A paginated list of Provider items. */
export type ProviderPaginator = {
  __typename?: 'ProviderPaginator';
  /** A list of Provider items. */
  data: Array<Provider>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Query = {
  __typename?: 'Query';
  /** Get a single article */
  article?: Maybe<Article>;
  /** List multiple articles. */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** List multiple articles. */
  articlesMeili?: Maybe<Array<Maybe<Article>>>;
  /** List the newest articles. */
  articlesNew?: Maybe<ArticlePaginatorSimple>;
  /** List multiple articles. */
  articlesPaginated?: Maybe<ArticlePaginatorSimple>;
  asset?: Maybe<Asset>;
  assets?: Maybe<AssetPaginator>;
  channel?: Maybe<TvChannel>;
  channelDates?: Maybe<Array<Maybe<ChannelDate>>>;
  channelList?: Maybe<TvChannelPaginator>;
  channelShowtime?: Maybe<TvChannelShowtime>;
  channelShowtimeByEventId?: Maybe<TvChannelShowtime>;
  channelShowtimeList?: Maybe<Array<Maybe<TvChannelShowtime>>>;
  channelShowtimeNow?: Maybe<TvChannelShowtime>;
  channelShowtimes?: Maybe<ShowtimesPaginationList>;
  channelShowtimesList?: Maybe<Array<Maybe<TvChannelShowtime>>>;
  channels?: Maybe<TvChannelPaginator>;
  cinema?: Maybe<Cinema>;
  cinemaDates?: Maybe<Array<Maybe<CinemaDate>>>;
  cinemas?: Maybe<CinemaPaginator>;
  cities?: Maybe<CityPaginator>;
  city?: Maybe<City>;
  collage?: Maybe<Collage>;
  collagen?: Maybe<CollagePaginatorSimple>;
  collection?: Maybe<Collection>;
  collectionBySlug?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  currentCinemaPoster?: Maybe<Array<Maybe<CinemaPoster>>>;
  customerCurrent?: Maybe<CustomerUser>;
  entities?: Maybe<EntityPaginationList>;
  entity?: Maybe<EntityEntry>;
  episode?: Maybe<Episode>;
  episodes?: Maybe<EpisodePaginator>;
  /** Get a single external link. */
  externalLink?: Maybe<Link>;
  /** List external links. */
  externalLinks?: Maybe<Array<Maybe<Link>>>;
  findBySlug?: Maybe<Entry>;
  /** List multiple galleries. */
  galleries?: Maybe<Array<Maybe<Gallery>>>;
  /** Get a single quote. */
  gallery?: Maybe<Gallery>;
  genre?: Maybe<Genre>;
  genres?: Maybe<GenrePaginator>;
  getStates?: Maybe<Array<Maybe<CountryState>>>;
  /** List multiple globals. */
  globals?: Maybe<Global>;
  health?: Maybe<Health>;
  horoskop?: Maybe<Horoskop>;
  horoskops?: Maybe<Array<Maybe<Horoskop>>>;
  /** Get a single link collection. */
  linkCollection?: Maybe<LinkCollection>;
  /** List external links. */
  linkCollections?: Maybe<Array<Maybe<LinkCollection>>>;
  magazine_specials?: Maybe<Array<Maybe<Magazine>>>;
  /** Magazine covers. */
  magazines?: Maybe<Array<Maybe<Magazine>>>;
  me?: Maybe<User>;
  mooncalendar?: Maybe<MooncalendarDayPaginationList>;
  mooncalendarDay?: Maybe<MoonCalendarDay>;
  mooncalendarDays?: Maybe<Array<Maybe<MoonCalendarDay>>>;
  mooncalendarItem?: Maybe<MoonCalendarDay>;
  movie?: Maybe<Movie>;
  movies?: Maybe<MoviesPaginationList>;
  moviesInCinema?: Maybe<MoviesPaginationList>;
  moviesList?: Maybe<Array<Maybe<Movie>>>;
  moviesNew?: Maybe<MoviePaginator>;
  moviesNewestInCinema?: Maybe<MoviesPaginationList>;
  moviesPopularity?: Maybe<MoviePaginator>;
  moviesTv?: Maybe<MoviePaginator>;
  myZodiac?: Maybe<HoroskopZodiac>;
  navigation?: Maybe<Navigation>;
  navigationByHandle?: Maybe<Navigation>;
  navigationByHandles?: Maybe<Array<Maybe<Navigation>>>;
  /** List multiple users. */
  navigations?: Maybe<Array<Maybe<Navigation>>>;
  newsletter?: Maybe<Newsletter>;
  now?: Maybe<NowEntryItemPaginator>;
  /** Get a single page */
  page?: Maybe<Page>;
  /** List all pages. */
  pages?: Maybe<Array<Maybe<Page>>>;
  paywall?: Maybe<Paywall>;
  /** List all product mappings */
  paywallProducts?: Maybe<Array<PaywallProductMapping>>;
  person?: Maybe<Person>;
  personablePositions?: Maybe<Array<Maybe<PersonablePosition>>>;
  personables?: Maybe<PersonablePaginationList>;
  persons?: Maybe<PersonsPaginationList>;
  personsList?: Maybe<Array<Maybe<Person>>>;
  preview?: Maybe<Entry>;
  provider?: Maybe<Provider>;
  providers?: Maybe<ProviderPaginator>;
  providersList?: Maybe<Array<Maybe<Provider>>>;
  /** Get a single quote. */
  quote?: Maybe<Quote>;
  /** List multiple quotes. */
  quotes?: Maybe<Array<Maybe<Quote>>>;
  redirects?: Maybe<RedirectsPaginatorSimple>;
  resolveUrl?: Maybe<Scalars['String']['output']>;
  /** Get a single ressort. */
  ressort?: Maybe<Ressort>;
  /** Get all ressorts. */
  ressorts?: Maybe<Array<Maybe<Ressort>>>;
  season?: Maybe<Season>;
  service?: Maybe<ServiceEntity>;
  services?: Maybe<ServiceEntityPaginator>;
  /** Get all static texts for a portal */
  staticTexts?: Maybe<Array<Maybe<StaticText>>>;
  /** Get a single subscription ad. */
  subscriptionAd?: Maybe<SubscriptionAd>;
  /** List all subscription ads. */
  subscriptionAds?: Maybe<Array<Maybe<SubscriptionAd>>>;
  /** Get a single subscription page. */
  subscriptionPage?: Maybe<SubscriptionPage>;
  /** List all subscription pages. */
  subscriptionPages?: Maybe<Array<Maybe<SubscriptionPage>>>;
  /** Get a single subscription shop by id. */
  subscriptionShop?: Maybe<SubscriptionShop>;
  /** Get a single subscription shop by slug. */
  subscriptionShopBySlug?: Maybe<SubscriptionShop>;
  /** List all subscription shops ads. */
  subscriptionShops?: Maybe<Array<Maybe<SubscriptionShop>>>;
  /** VGN Team */
  team?: Maybe<Team>;
  /** VGN Teams */
  teams?: Maybe<Array<Maybe<Team>>>;
  topic?: Maybe<Topic>;
  topic_clusters?: Maybe<TopicClustersPaginatorSimple>;
  topics?: Maybe<TopicsPaginatorSimple>;
  trailer?: Maybe<Trailer>;
  trailers?: Maybe<TrailerPaginator>;
  tt500Asset?: Maybe<Tt500Asset>;
  tt500Assets: Tt500AssetPaginator;
  tt500Companies?: Maybe<Tt500CompanyPagination>;
  tt500Company?: Maybe<Tt500Company>;
  tt500FinanceReport?: Maybe<Tt500FinanceReportDefault>;
  tt500FinanceReports?: Maybe<Tt500FinanceReportPagination>;
  tt500FinanceReportsBanks?: Maybe<Tt500FinanceReportBanksPagination>;
  tt500FinanceReportsBiggestIncreaseEmployees?: Maybe<Tt500FinanceReportPagination>;
  tt500FinanceReportsInsurances?: Maybe<Tt500FinanceReportInsurancesPagination>;
  tt500FinanceReportsTopNew?: Maybe<Tt500FinanceReportPagination>;
  tt500Industries: Tt500CompanyIndustryPaginator;
  tt500Industry?: Maybe<Tt500CompanyIndustry>;
  tt500Person?: Maybe<Tt500Person>;
  tt500Persons?: Maybe<Tt500PersonPagination>;
  tvshow?: Maybe<Show>;
  tvshows?: Maybe<ShowsPaginationList>;
  tvshowsList?: Maybe<Array<Maybe<Show>>>;
  tvshowsNew?: Maybe<ShowPaginator>;
  tvshowsPopularity?: Maybe<ShowPaginator>;
  tvshowsTv?: Maybe<ShowPaginator>;
  /** Find a single user by an identifying attribute. */
  user?: Maybe<User>;
  watchlinks?: Maybe<WatchLinkPaginator>;
  zodiacs?: Maybe<Array<Maybe<HoroskopZodiac>>>;
};


export type QueryArticleArgs = {
  debug?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticlesArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  dateType?: InputMaybe<DateType>;
  from?: InputMaybe<Scalars['Date']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  max?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
  ressort?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryArticlesMeiliArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  dateType?: InputMaybe<DateType>;
  from?: InputMaybe<Scalars['Date']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  max?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
  ressort?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryArticlesNewArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticlesPaginatedArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  dateType?: InputMaybe<DateType>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['Date']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  portal: Scalars['String']['input'];
  ressort?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAssetArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAssetsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelListArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryChannelShowtimeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelShowtimeByEventIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelShowtimeListArgs = {
  channelIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  onlyLive?: InputMaybe<Scalars['Boolean']['input']>;
  onlyNow?: InputMaybe<Scalars['Boolean']['input']>;
  onlySport?: InputMaybe<Scalars['Boolean']['input']>;
  until?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryChannelShowtimeNowArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  primetime?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryChannelShowtimesArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  until?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryChannelShowtimesListArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  until?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryChannelsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCinemaArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCinemasArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCitiesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  state_code?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCityArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollagenArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  random?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCollectionBySlugArgs = {
  random?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCurrentCinemaPosterArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntitiesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  person?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEntityArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEpisodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEpisodesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExternalLinkArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExternalLinksArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFindBySlugArgs = {
  portal?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGalleriesArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGalleryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGenreArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGenresArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ids_exclude?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slugs_exclude?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  where?: InputMaybe<QueryGenresWhereWhereConditions>;
};


export type QueryGlobalsArgs = {
  portal?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHoroskopArgs = {
  date?: InputMaybe<Scalars['Date']['input']>;
  zodiac?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHoroskopsArgs = {
  date?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryLinkCollectionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLinkCollectionsArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMagazine_SpecialsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMooncalendarArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMooncalendarDayArgs = {
  date?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryMooncalendarDaysArgs = {
  filter?: InputMaybe<Array<InputMaybe<MooncalendarOptions>>>;
  start: Scalars['Date']['input'];
  stop: Scalars['Date']['input'];
};


export type QueryMooncalendarItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMovieArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMoviesArgs = {
  excludeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMoviesInCinemaArgs = {
  cinema?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  movieIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  until?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryMoviesListArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMoviesNewArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMoviesNewestInCinemaArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMoviesPopularityArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMoviesTvArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMyZodiacArgs = {
  birthday?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryNavigationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNavigationByHandleArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNavigationByHandlesArgs = {
  handles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigationsArgs = {
  handle?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNewsletterArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNowArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPagesArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaywallArgs = {
  portal?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaywallProductsArgs = {
  portal?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPersonArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPersonablesArgs = {
  entity?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  person?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPersonsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  onlyWithArticle?: InputMaybe<Scalars['Boolean']['input']>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPersonsListArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPreviewArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProviderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProvidersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProvidersListArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuotesArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRedirectsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
};


export type QueryResolveUrlArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRessortArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRessortsArgs = {
  childIndicator?: InputMaybe<Scalars['String']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySeasonArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryServicesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStaticTextsArgs = {
  portal?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionAdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionAdsArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySubscriptionPageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionPagesArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySubscriptionShopArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionShopBySlugArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionShopsArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTopicArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTopic_ClustersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTopicsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrailerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrailersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTt500AssetArgs = {
  id: Scalars['String']['input'];
};


export type QueryTt500AssetsArgs = {
  first?: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTt500CompaniesArgs = {
  external_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Tt500CompanyType>;
};


export type QueryTt500CompanyArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTt500FinanceReportArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTt500FinanceReportsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  industries?: InputMaybe<Array<Scalars['String']['input']>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Tt500CompanyType>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTt500FinanceReportsBanksArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Tt500CompanyType>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTt500FinanceReportsBiggestIncreaseEmployeesArgs = {
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTt500FinanceReportsInsurancesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Tt500CompanyType>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTt500FinanceReportsTopNewArgs = {
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTt500IndustriesArgs = {
  first?: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTt500IndustryArgs = {
  id: Scalars['String']['input'];
  published?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTt500PersonArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTt500PersonsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTvshowArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTvshowsArgs = {
  excludeUnpublished?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTvshowsListArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTvshowsNewArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTvshowsPopularityArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTvshowsTvArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWatchlinksArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** Allowed column names for Query.genres.where. */
export enum QueryGenresWhereColumn {
  Id = 'ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `genres`. */
export type QueryGenresWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGenresWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGenresWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGenresWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGenresWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `genres`. */
export type QueryGenresWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGenresWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

export type Quote = {
  __typename?: 'Quote';
  /** Unique primary key. */
  id?: Maybe<Scalars['String']['output']>;
  /** Person */
  person?: Maybe<Person>;
  /** Source */
  source?: Maybe<Scalars['String']['output']>;
  /** Quote text */
  text?: Maybe<Scalars['String']['output']>;
  /** TVMedia Actor DB */
  tvmedia_person?: Maybe<Scalars['String']['output']>;
};

export type Redirect = {
  __typename?: 'Redirect';
  /** Id */
  id?: Maybe<Scalars['ID']['output']>;
  /** Redirect from url */
  redirect_from?: Maybe<Scalars['String']['output']>;
  /** Redirect to url */
  redirect_target?: Maybe<Scalars['String']['output']>;
  /** Redirect mode */
  redirect_type?: Maybe<Scalars['Int']['output']>;
};

export type RedirectsPaginatorSimple = {
  __typename?: 'RedirectsPaginatorSimple';
  data?: Maybe<Array<Maybe<Redirect>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Ressort = {
  __typename?: 'Ressort';
  /** Ad settings for the page */
  ad_settings?: Maybe<AdSetting>;
  articles?: Maybe<ArticlePaginatorSimple>;
  /** Description of the ressport */
  description?: Maybe<Scalars['String']['output']>;
  /** Disable ads for the ressort */
  disable_ads?: Maybe<Scalars['Boolean']['output']>;
  /** ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** More teaser is used for boxes */
  more_teaser?: Maybe<Scalars['String']['output']>;
  more_teaser_headline?: Maybe<Scalars['String']['output']>;
  /** More teaser image should be used in an overview box */
  more_teaser_image?: Maybe<Asset>;
  /** Oewa data */
  oewa?: Maybe<Oewa>;
  /** Outbrain compliant */
  outbrain_compliant?: Maybe<Scalars['Boolean']['output']>;
  /** Outbrain deactivated */
  outbrain_disabled?: Maybe<Scalars['Boolean']['output']>;
  /** Paid content settings */
  paid_content?: Maybe<PaidContent>;
  /** Parent ressort */
  parent?: Maybe<Ressort>;
  /** Slug */
  slug?: Maybe<Scalars['String']['output']>;
  social_media?: Maybe<Array<Maybe<CollageSocialMedia>>>;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Teams */
  teams?: Maybe<Array<Maybe<Team>>>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Single users that has been added to this ressort */
  users?: Maybe<Array<Maybe<User>>>;
};


export type RessortArticlesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type RessortDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RessortMore_TeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RessortMore_Teaser_ImageArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Review = {
  __typename?: 'Review';
  /** Entity id */
  entity_id?: Maybe<Scalars['String']['output']>;
  /** Review text */
  text?: Maybe<Scalars['String']['output']>;
};


export type ReviewTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE'
}

/** Show season entry. */
export type Season = BaseInterface & {
  __typename?: 'Season';
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  /** Episodes */
  episodes?: Maybe<EpisodePaginator>;
  /** Unique primary key. */
  id?: Maybe<Scalars['String']['output']>;
  /** Season number */
  nr?: Maybe<Scalars['Int']['output']>;
  /** Original Title of the enitity */
  original_title?: Maybe<Scalars['String']['output']>;
  /** Show */
  show?: Maybe<Show>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']['output']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};


/** Show season entry. */
export type SeasonEpisodesArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated list of Season items. */
export type SeasonPaginator = {
  __typename?: 'SeasonPaginator';
  /** A list of Season items. */
  data: Array<Season>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type SeoInterface = {
  /** Custom open graph description */
  custom_open_graph_description?: Maybe<Scalars['String']['output']>;
  /** Open graph title */
  custom_open_graph_title?: Maybe<Scalars['String']['output']>;
  /** Twitter custom description */
  custom_twitter_description?: Maybe<Scalars['String']['output']>;
  /** Custom twitter title */
  custom_twitter_title?: Maybe<Scalars['String']['output']>;
  /** Google news title */
  google_news_title?: Maybe<Scalars['String']['output']>;
  /** Meta meta_description */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Meta title */
  meta_title?: Maybe<Scalars['String']['output']>;
  /** No follow */
  no_follow?: Maybe<Scalars['Boolean']['output']>;
  /** Should that entry be index */
  no_index?: Maybe<Scalars['Boolean']['output']>;
  /** Open graph description */
  open_graph_description?: Maybe<Scalars['String']['output']>;
  /** Open Graph Image */
  open_graph_image?: Maybe<Scalars['String']['output']>;
  /** Redirect url */
  redirect?: Maybe<Scalars['String']['output']>;
  /** Twitter description mode */
  twitter_description?: Maybe<Scalars['String']['output']>;
  /** Twitter Image */
  twitter_image?: Maybe<Scalars['String']['output']>;
};

export type ServiceEntity = Provider | TvChannel;

/** A paginated list of ServiceEntity items. */
export type ServiceEntityPaginator = {
  __typename?: 'ServiceEntityPaginator';
  /** A list of ServiceEntity items. */
  data: Array<ServiceEntity>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Sheet = {
  __typename?: 'Sheet';
  /** Sheet image */
  sheet_image?: Maybe<Asset>;
  /** Text */
  sheet_text?: Maybe<Scalars['String']['output']>;
  /** Title */
  sheet_title?: Maybe<Scalars['String']['output']>;
};


export type SheetSheet_ImageArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SheetSheet_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Show entry. */
export type Show = EntityInterface & {
  __typename?: 'Show';
  actor_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Article ids */
  article_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Asset id backdrop image */
  asset_backdrop_id?: Maybe<Scalars['String']['output']>;
  /** Asset id cover image */
  asset_id?: Maybe<Scalars['String']['output']>;
  /** Assets for the movie */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Backdrop image */
  backdrop_image?: Maybe<Asset>;
  /** cover image */
  cover_image?: Maybe<Asset>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  crew_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Id of the director */
  director_id?: Maybe<Scalars['String']['output']>;
  /** flat list of director ids for the show */
  director_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** directors for the movie */
  directors?: Maybe<PersonPaginationList>;
  /** Enriched data  */
  enriched?: Maybe<Scalars['Boolean']['output']>;
  /** Episodes */
  episodes?: Maybe<Array<Maybe<Episode>>>;
  /** Genre ids for the show */
  genre_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Genres for the show */
  genres?: Maybe<Array<Maybe<Genre>>>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** Imdb id */
  imdb_id?: Maybe<Scalars['String']['output']>;
  /** Id within the justwatch api */
  justwatch_id?: Maybe<Scalars['String']['output']>;
  /** Watch links */
  links?: Maybe<Array<Maybe<WatchLink>>>;
  /** Mediapress content id */
  mediapress_id?: Maybe<Scalars['String']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Original id is set if the the entry has been transformed */
  original_id?: Maybe<Scalars['String']['output']>;
  /** persons for the show */
  persons?: Maybe<PersonPaginationList>;
  /** Provider */
  provider?: Maybe<Array<Maybe<Provider>>>;
  /** Pubslihed */
  published?: Maybe<Scalars['Boolean']['output']>;
  /** Review */
  review?: Maybe<Scalars['String']['output']>;
  /** Reviewed data  */
  reviewed?: Maybe<Scalars['Boolean']['output']>;
  /** Run time in minutes */
  runtime?: Maybe<Scalars['Int']['output']>;
  /** Seasons */
  seasons?: Maybe<SeasonPaginator>;
  /** Shorttitle of the enitity */
  short?: Maybe<Scalars['String']['output']>;
  /** Showtimes identifier */
  showtimes_id?: Maybe<Scalars['String']['output']>;
  /** Pivot information will only be attached if the querys root is a person. */
  singlePersonMetaInformation?: Maybe<PersonMeta>;
  /** Url-Slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Summary */
  summary?: Maybe<Scalars['String']['output']>;
  /** Tags for the show */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Summary Long */
  text_lg?: Maybe<Scalars['String']['output']>;
  /** Summary Medium */
  text_md?: Maybe<Scalars['String']['output']>;
  /** Summary Small */
  text_sm?: Maybe<Scalars['String']['output']>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']['output']>;
  /** Tmdb id */
  tmdb_id?: Maybe<Scalars['String']['output']>;
  /** Score */
  tmdb_score?: Maybe<Scalars['Float']['output']>;
  /** Score of TVMedia */
  tvm_score?: Maybe<Scalars['Int']['output']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  /** Year of release */
  year?: Maybe<Scalars['Int']['output']>;
  /** Youtube id */
  youtube?: Maybe<Scalars['String']['output']>;
};


/** Show entry. */
export type ShowDirectorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Show entry. */
export type ShowGenresArgs = {
  flat?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Show entry. */
export type ShowPersonsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Show entry. */
export type ShowReviewArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Show entry. */
export type ShowSeasonsArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Show entry. */
export type ShowSummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Show entry. */
export type ShowText_LgArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Show entry. */
export type ShowText_MdArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Show entry. */
export type ShowText_SmArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShowPaginationList = {
  __typename?: 'ShowPaginationList';
  data?: Maybe<Array<Maybe<Show>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

/** A paginated list of Show items. */
export type ShowPaginator = {
  __typename?: 'ShowPaginator';
  /** A list of Show items. */
  data: Array<Show>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ShowsPaginationList = {
  __typename?: 'ShowsPaginationList';
  data?: Maybe<Array<Maybe<Show>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type ShowtimesPaginationList = {
  __typename?: 'ShowtimesPaginationList';
  data?: Maybe<Array<Maybe<TvChannelShowtime>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
};

export enum SocialMediaNetwork {
  Facebook = 'facebook',
  Instagram = 'instagram',
  InstagramReel = 'instagram_reel',
  Pinterest = 'pinterest',
  Twitter = 'twitter'
}

export enum SocialMediaType {
  Facebook = 'facebook',
  Instagram = 'instagram',
  InstagramReel = 'instagram_reel',
  Linkedin = 'linkedin',
  Pinterest = 'pinterest',
  Spotify = 'spotify',
  Tiktok = 'tiktok',
  Twitter = 'twitter',
  Xing = 'xing',
  Youtube = 'youtube'
}

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export enum SpecialType {
  CinemaPage = 'cinema_page',
  MoviesSeriesMarquee = 'movies_series_marquee',
  ThisIsTvmedia = 'this_is_tvmedia',
  TvGuidePage = 'tv_guide_page'
}

export type StageElement = StageElementArticles | StageElementArticlesApa | StageElementArticlesIds | StageElementArticlesRessorts | StageElementNewsletter | StageElementSubscriptionShop;

export type StageElementArticles = {
  __typename?: 'StageElementArticles';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']['output']>;
  hide_mobile?: Maybe<Scalars['Boolean']['output']>;
  /** Mode */
  mode?: Maybe<Scalars['String']['output']>;
  /** Show images */
  show_images?: Maybe<Scalars['Boolean']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
  x?: Maybe<Scalars['Int']['output']>;
  y?: Maybe<Scalars['Int']['output']>;
};

export type StageElementArticlesApa = {
  __typename?: 'StageElementArticlesApa';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']['output']>;
  hide_mobile?: Maybe<Scalars['Boolean']['output']>;
  /** Mode */
  mode?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
  x?: Maybe<Scalars['Int']['output']>;
  y?: Maybe<Scalars['Int']['output']>;
};

export type StageElementArticlesIds = {
  __typename?: 'StageElementArticlesIds';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']['output']>;
  hide_mobile?: Maybe<Scalars['Boolean']['output']>;
  /** Mode */
  mode?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
  x?: Maybe<Scalars['Int']['output']>;
  y?: Maybe<Scalars['Int']['output']>;
};

export type StageElementArticlesRessorts = {
  __typename?: 'StageElementArticlesRessorts';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']['output']>;
  hide_mobile?: Maybe<Scalars['Boolean']['output']>;
  /** Mode */
  mode?: Maybe<Scalars['String']['output']>;
  /** Title */
  title?: Maybe<Scalars['String']['output']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']['output']>;
  x?: Maybe<Scalars['Int']['output']>;
  y?: Maybe<Scalars['Int']['output']>;
};

export type StageElementNewsletter = {
  __typename?: 'StageElementNewsletter';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  hide_mobile?: Maybe<Scalars['Boolean']['output']>;
  /** Distribution list id provided by mailion */
  newsletter?: Maybe<Newsletter>;
  /** Teaser for the download. */
  teaser?: Maybe<Scalars['String']['output']>;
  x?: Maybe<Scalars['Int']['output']>;
  y?: Maybe<Scalars['Int']['output']>;
};


export type StageElementNewsletterTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StageElementSubscriptionShop = {
  __typename?: 'StageElementSubscriptionShop';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']['output']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']['output']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']['output']>;
  hide_mobile?: Maybe<Scalars['Boolean']['output']>;
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
  x?: Maybe<Scalars['Int']['output']>;
  y?: Maybe<Scalars['Int']['output']>;
};

export type StaticText = {
  __typename?: 'StaticText';
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  value_plural?: Maybe<Scalars['String']['output']>;
};

export type SubscriptionAd = {
  __typename?: 'SubscriptionAd';
  /** Image asset */
  asset?: Maybe<Asset>;
  /** Button text */
  button_text?: Maybe<Scalars['String']['output']>;
  /** Id */
  id: Scalars['ID']['output'];
  /** Link */
  link?: Maybe<Scalars['String']['output']>;
  /** Product code */
  paywall_code?: Maybe<Scalars['String']['output']>;
  /** Pricy currency */
  paywall_currency?: Maybe<Scalars['String']['output']>;
  /** Paywall features */
  paywall_features?: Maybe<Array<Maybe<SubscriptionShopProductFeature>>>;
  /** Marketing code */
  paywall_marketing_code?: Maybe<Scalars['String']['output']>;
  /** Price */
  paywall_price?: Maybe<Scalars['String']['output']>;
  /** Price interval */
  paywall_price_interval?: Maybe<Scalars['String']['output']>;
  /** Paywall title */
  paywall_title?: Maybe<Scalars['String']['output']>;
  /** UTM */
  paywall_utm?: Maybe<Scalars['String']['output']>;
  /** Teaser */
  teaser?: Maybe<Scalars['String']['output']>;
  /** Title. */
  title?: Maybe<Scalars['String']['output']>;
};


export type SubscriptionAdTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionPage = {
  __typename?: 'SubscriptionPage';
  banner_text?: Maybe<Scalars['String']['output']>;
  boxes?: Maybe<Array<SubscriptionPageBox>>;
  boxes_more?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<Scalars['String']['output']>;
  cta_link?: Maybe<Scalars['String']['output']>;
  feedback?: Maybe<Array<SubscriptionPageFeeback>>;
  feedback_headline?: Maybe<Scalars['String']['output']>;
  /** Id */
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Meta>;
  portal?: Maybe<Scalars['String']['output']>;
  /** Price in euro */
  price?: Maybe<Scalars['String']['output']>;
  price_extra?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  top_disclaimer?: Maybe<Scalars['String']['output']>;
  top_headline?: Maybe<Scalars['String']['output']>;
  top_image?: Maybe<Asset>;
};

export type SubscriptionPageBox = {
  __typename?: 'SubscriptionPageBox';
  headline?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  text?: Maybe<Scalars['String']['output']>;
};


export type SubscriptionPageBoxTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionPageFeeback = {
  __typename?: 'SubscriptionPageFeeback';
  image?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


export type SubscriptionPageFeebackTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionShop = {
  __typename?: 'SubscriptionShop';
  /**
   * Header image for startup section for the size desktop. Options for fit can be
   * found at https://statamic.dev/tags/glide#focal-point-cropping
   */
  header_image_desktop?: Maybe<Asset>;
  /**
   * Header image for startup section for the size mobile. Options for fit can be
   * found at https://statamic.dev/tags/glide#focal-point-cropping
   */
  header_image_mobile?: Maybe<Asset>;
  /**
   * Header image for startup section for the size tablet. Options for fit can be
   * found at https://statamic.dev/tags/glide#focal-point-cropping
   */
  header_image_tablet?: Maybe<Asset>;
  /** Startup headline */
  headline?: Maybe<Scalars['String']['output']>;
  /** Unique id */
  id?: Maybe<Scalars['String']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** More button links */
  more_button_link?: Maybe<Scalars['String']['output']>;
  /** More button text */
  more_button_text?: Maybe<Scalars['String']['output']>;
  /** More headline h1 */
  more_headline_1?: Maybe<Scalars['String']['output']>;
  /** More headline h2 */
  more_headline_2?: Maybe<Scalars['String']['output']>;
  /** More image for the size desktop. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  more_image_desktop?: Maybe<Asset>;
  /** More image for the size mobile. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  more_image_mobile?: Maybe<Asset>;
  /** More image for the size tablet. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  more_image_tablet?: Maybe<Asset>;
  /** Teaser text for the more section */
  more_teaser?: Maybe<Scalars['String']['output']>;
  /** Text for the more section */
  more_text?: Maybe<Scalars['String']['output']>;
  /** Product 1 marketing code with binding */
  product_box_1_code_with_binding?: Maybe<Scalars['String']['output']>;
  /** Product 1 marketing code without binding */
  product_box_1_code_without_binding?: Maybe<Scalars['String']['output']>;
  /** Product 1 features */
  product_box_1_features?: Maybe<Array<Maybe<SubscriptionShopProductFeature>>>;
  /** Product 1 headline */
  product_box_1_headline?: Maybe<Scalars['String']['output']>;
  /** Product 1 image for the size desktop. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_1_image_desktop?: Maybe<Asset>;
  /** Product 1 image for the size mobile. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_1_image_mobile?: Maybe<Asset>;
  /** Product 1 image for the size tablet. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_1_image_tablet?: Maybe<Asset>;
  /** Product 1 offer with binding */
  product_box_1_offer_with_binding?: Maybe<Scalars['String']['output']>;
  /** Product 1 offer without binding */
  product_box_1_offer_without_binding?: Maybe<Scalars['String']['output']>;
  /** Product 1 Read more button */
  product_box_1_read_more_button?: Maybe<Scalars['String']['output']>;
  /** Product 1 tagline */
  product_box_1_tagline?: Maybe<Scalars['String']['output']>;
  /** Product 1 text */
  product_box_1_text?: Maybe<Scalars['String']['output']>;
  /** Product 2 marketing code with binding */
  product_box_2_code_with_binding?: Maybe<Scalars['String']['output']>;
  /** Product 2 marketing code without binding */
  product_box_2_code_without_binding?: Maybe<Scalars['String']['output']>;
  /** Product 2 features */
  product_box_2_features?: Maybe<Array<Maybe<SubscriptionShopProductFeature>>>;
  /** Product 2 headline */
  product_box_2_headline?: Maybe<Scalars['String']['output']>;
  /** Product 2 image for the size desktop. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_2_image_desktop?: Maybe<Asset>;
  /** Product 2 image for the size mobile. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_2_image_mobile?: Maybe<Asset>;
  /** Product 2 image for the size tablet. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_2_image_tablet?: Maybe<Asset>;
  /** Product 2 offer with binding */
  product_box_2_offer_with_binding?: Maybe<Scalars['String']['output']>;
  /** Product 2 offer without binding */
  product_box_2_offer_without_binding?: Maybe<Scalars['String']['output']>;
  /** Product 2 Read more button */
  product_box_2_read_more_button?: Maybe<Scalars['String']['output']>;
  /** Product 2 tagline */
  product_box_2_tagline?: Maybe<Scalars['String']['output']>;
  /** Product 2 text */
  product_box_2_text?: Maybe<Scalars['String']['output']>;
  /** Product 3 marketing code with binding */
  product_box_3_code_with_binding?: Maybe<Scalars['String']['output']>;
  /** Product 3 marketing code without binding */
  product_box_3_code_without_binding?: Maybe<Scalars['String']['output']>;
  /** Product 3 features */
  product_box_3_features?: Maybe<Array<Maybe<SubscriptionShopProductFeature>>>;
  /** Product 3 headline */
  product_box_3_headline?: Maybe<Scalars['String']['output']>;
  /** Product 3 image for the size desktop. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_3_image_desktop?: Maybe<Asset>;
  /** Product 3 image for the size mobile. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_3_image_mobile?: Maybe<Asset>;
  /** Product 3 image for the size tablet. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_3_image_tablet?: Maybe<Asset>;
  /** Product 3 offer with binding */
  product_box_3_offer_with_binding?: Maybe<Scalars['String']['output']>;
  /** Product 3 offer without binding */
  product_box_3_offer_without_binding?: Maybe<Scalars['String']['output']>;
  /** Product 3 Read more button */
  product_box_3_read_more_button?: Maybe<Scalars['String']['output']>;
  /** Product 3 tagline */
  product_box_3_tagline?: Maybe<Scalars['String']['output']>;
  /** Product 3 text */
  product_box_3_text?: Maybe<Scalars['String']['output']>;
  /** The slug to to identify a subscription shop page */
  slug?: Maybe<Scalars['String']['output']>;
  /** Startup teaser */
  teaser?: Maybe<Scalars['String']['output']>;
  /** Internal title */
  title?: Maybe<Scalars['String']['output']>;
  /** Startup toogle option 1 */
  toggle_option_1?: Maybe<Scalars['String']['output']>;
  /** Startup toogle option 2 */
  toggle_option_2?: Maybe<Scalars['String']['output']>;
  /** Upgrade section headline */
  upgrade_intro_headline?: Maybe<Scalars['String']['output']>;
  /** Upgrade teaser */
  upgrade_intro_text?: Maybe<Scalars['String']['output']>;
};


export type SubscriptionShopHeader_Image_DesktopArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopHeader_Image_MobileArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopHeader_Image_TabletArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopMore_Image_DesktopArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopMore_Image_MobileArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopMore_Image_TabletArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopMore_TeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionShopMore_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionShopProduct_Box_1_Image_DesktopArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopProduct_Box_1_Image_MobileArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopProduct_Box_1_Image_TabletArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopProduct_Box_1_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionShopProduct_Box_2_Image_DesktopArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopProduct_Box_2_Image_MobileArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopProduct_Box_2_Image_TabletArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopProduct_Box_2_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionShopProduct_Box_3_Image_DesktopArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopProduct_Box_3_Image_MobileArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopProduct_Box_3_Image_TabletArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type SubscriptionShopProduct_Box_3_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionShopTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionShopUpgrade_Intro_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionShopProductFeature = {
  __typename?: 'SubscriptionShopProductFeature';
  text?: Maybe<Scalars['String']['output']>;
};

export enum Tt500AccountingType {
  Ifrs = 'IFRS',
  Ugb = 'UGB'
}

export type Tt500Asset = {
  __typename?: 'TT500Asset';
  external_path?: Maybe<Scalars['String']['output']>;
  file?: Maybe<GlideData>;
  id: Scalars['ID']['output'];
  origin?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type Tt500AssetFileArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** A paginated list of TT500Asset items. */
export type Tt500AssetPaginator = {
  __typename?: 'TT500AssetPaginator';
  /** A list of TT500Asset items. */
  data: Array<Tt500Asset>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Tt500Businesses = {
  __typename?: 'TT500Businesses';
  business?: Maybe<Tt500Industry>;
  id: Scalars['ID']['output'];
};

export type Tt500Company = {
  __typename?: 'TT500Company';
  asset?: Maybe<Tt500Asset>;
  asset_id?: Maybe<Scalars['String']['output']>;
  businesses?: Maybe<Array<Tt500Businesses>>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  external_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  industries?: Maybe<Array<Tt500CompanyIndustry>>;
  logo?: Maybe<Scalars['String']['output']>;
  management?: Maybe<Array<Tt500PersonPosition>>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  ranking?: Maybe<Scalars['Int']['output']>;
  reports?: Maybe<Array<Tt500FinanceReport>>;
  slug?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  type: Tt500CompanyType;
  web?: Maybe<Scalars['String']['output']>;
};

export type Tt500CompanyIndustry = {
  __typename?: 'TT500CompanyIndustry';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  published?: Maybe<Scalars['Boolean']['output']>;
};

/** A paginated list of TT500CompanyIndustry items. */
export type Tt500CompanyIndustryPaginator = {
  __typename?: 'TT500CompanyIndustryPaginator';
  /** A list of TT500CompanyIndustry items. */
  data: Array<Tt500CompanyIndustry>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Tt500CompanyPagination = {
  __typename?: 'TT500CompanyPagination';
  data?: Maybe<Array<Tt500Company>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Tt500CompanyPosition = {
  function: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  kind: Scalars['String']['input'];
  year: Scalars['Int']['input'];
};

export type Tt500CompanyReport = {
  accounting_type?: InputMaybe<Tt500AccountingType>;
  annoation?: InputMaybe<Scalars['String']['input']>;
  corecapitalratio?: InputMaybe<Scalars['Float']['input']>;
  corecapitalratio_prev?: InputMaybe<Scalars['Float']['input']>;
  costincomeratio?: InputMaybe<Scalars['Float']['input']>;
  costincomeratio_prev?: InputMaybe<Scalars['Float']['input']>;
  damage?: InputMaybe<Scalars['Float']['input']>;
  damage_prev?: InputMaybe<Scalars['Float']['input']>;
  earnedpremium?: InputMaybe<Scalars['Float']['input']>;
  earnedpremium_delta?: InputMaybe<Scalars['Float']['input']>;
  ebit?: InputMaybe<Scalars['Float']['input']>;
  ebit_prev?: InputMaybe<Scalars['Float']['input']>;
  employees?: InputMaybe<Scalars['Int']['input']>;
  employees_delta?: InputMaybe<Scalars['Float']['input']>;
  equityratio?: InputMaybe<Scalars['Float']['input']>;
  excess?: InputMaybe<Scalars['Float']['input']>;
  footnote?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['Float']['input']>;
  health_prev?: InputMaybe<Scalars['Float']['input']>;
  life?: InputMaybe<Scalars['Float']['input']>;
  life_prev?: InputMaybe<Scalars['Float']['input']>;
  netcombinedratio?: InputMaybe<Scalars['Float']['input']>;
  netcombinedratio_prev?: InputMaybe<Scalars['Float']['input']>;
  netinterestmargin?: InputMaybe<Scalars['Float']['input']>;
  netinterestmargin_prev?: InputMaybe<Scalars['Float']['input']>;
  netrevenue?: InputMaybe<Scalars['Float']['input']>;
  netrevenue_delta?: InputMaybe<Scalars['Float']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  ranking_prev?: InputMaybe<Scalars['Int']['input']>;
  return?: InputMaybe<Scalars['Float']['input']>;
  share_commissionresult?: InputMaybe<Scalars['Float']['input']>;
  share_commissionresult_prev?: InputMaybe<Scalars['Float']['input']>;
  share_netinterestincome?: InputMaybe<Scalars['Float']['input']>;
  share_netinterestincome_prev?: InputMaybe<Scalars['Float']['input']>;
  share_tradingresult?: InputMaybe<Scalars['Float']['input']>;
  share_tradingresult_prev?: InputMaybe<Scalars['Float']['input']>;
  solvencyratio?: InputMaybe<Scalars['Float']['input']>;
  solvencyratio_prev?: InputMaybe<Scalars['Float']['input']>;
  totalassets?: InputMaybe<Scalars['Float']['input']>;
  totalassets_delta?: InputMaybe<Scalars['Float']['input']>;
  unitlinked?: InputMaybe<Scalars['Float']['input']>;
  unitlinked_prev?: InputMaybe<Scalars['Float']['input']>;
  year: Scalars['Int']['input'];
  year_financial?: InputMaybe<Scalars['String']['input']>;
  yield?: InputMaybe<Scalars['Float']['input']>;
  yield_prev?: InputMaybe<Scalars['Float']['input']>;
};

export enum Tt500CompanyType {
  Bank = 'BANK',
  Insurance = 'INSURANCE',
  Normal = 'NORMAL'
}

export type Tt500CompanyUpdateReport = {
  accounting_type?: InputMaybe<Tt500AccountingType>;
  annoation?: InputMaybe<Scalars['String']['input']>;
  corecapitalratio?: InputMaybe<Scalars['Float']['input']>;
  corecapitalratio_prev?: InputMaybe<Scalars['Float']['input']>;
  costincomeratio?: InputMaybe<Scalars['Float']['input']>;
  costincomeratio_prev?: InputMaybe<Scalars['Float']['input']>;
  damage?: InputMaybe<Scalars['Float']['input']>;
  damage_prev?: InputMaybe<Scalars['Float']['input']>;
  earnedpremium?: InputMaybe<Scalars['Float']['input']>;
  earnedpremium_delta?: InputMaybe<Scalars['Float']['input']>;
  ebit?: InputMaybe<Scalars['Float']['input']>;
  ebit_prev?: InputMaybe<Scalars['Float']['input']>;
  employees?: InputMaybe<Scalars['Int']['input']>;
  employees_delta?: InputMaybe<Scalars['Float']['input']>;
  equityratio?: InputMaybe<Scalars['Float']['input']>;
  excess?: InputMaybe<Scalars['Float']['input']>;
  footnote?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['Float']['input']>;
  health_prev?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  life?: InputMaybe<Scalars['Float']['input']>;
  life_prev?: InputMaybe<Scalars['Float']['input']>;
  netcombinedratio?: InputMaybe<Scalars['Float']['input']>;
  netcombinedratio_prev?: InputMaybe<Scalars['Float']['input']>;
  netinterestmargin?: InputMaybe<Scalars['Float']['input']>;
  netinterestmargin_prev?: InputMaybe<Scalars['Float']['input']>;
  netrevenue?: InputMaybe<Scalars['Float']['input']>;
  netrevenue_delta?: InputMaybe<Scalars['Float']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  ranking_hidden?: InputMaybe<Scalars['Boolean']['input']>;
  ranking_prev?: InputMaybe<Scalars['Int']['input']>;
  return?: InputMaybe<Scalars['Float']['input']>;
  share_commissionresult?: InputMaybe<Scalars['Float']['input']>;
  share_commissionresult_prev?: InputMaybe<Scalars['Float']['input']>;
  share_netinterestincome?: InputMaybe<Scalars['Float']['input']>;
  share_netinterestincome_prev?: InputMaybe<Scalars['Float']['input']>;
  share_tradingresult?: InputMaybe<Scalars['Float']['input']>;
  share_tradingresult_prev?: InputMaybe<Scalars['Float']['input']>;
  solvencyratio?: InputMaybe<Scalars['Float']['input']>;
  solvencyratio_prev?: InputMaybe<Scalars['Float']['input']>;
  totalassets?: InputMaybe<Scalars['Float']['input']>;
  totalassets_delta?: InputMaybe<Scalars['Float']['input']>;
  unitlinked?: InputMaybe<Scalars['Float']['input']>;
  unitlinked_prev?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  year_financial?: InputMaybe<Scalars['Int']['input']>;
  yield?: InputMaybe<Scalars['Float']['input']>;
  yield_prev?: InputMaybe<Scalars['Float']['input']>;
};

export type Tt500CreateCompany = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  management?: InputMaybe<Array<Tt500CompanyPosition>>;
  name?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  reports?: InputMaybe<Array<Tt500CompanyReport>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  type: Tt500CompanyType;
  web?: InputMaybe<Scalars['String']['input']>;
};

export type Tt500CreatePerson = {
  firstname: Scalars['String']['input'];
  gender?: InputMaybe<Tt500PersonGender>;
  lastname: Scalars['String']['input'];
};

export type Tt500FinanceReport = Tt500FinanceReportBank | Tt500FinanceReportDefault | Tt500FinanceReportInsurance;

export type Tt500FinanceReportBank = Tt500ResultInterface & {
  __typename?: 'TT500FinanceReportBank';
  accounting_type?: Maybe<Tt500AccountingType>;
  annoation?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Tt500Company>;
  /** TODO: Describe this field */
  corecapitalratio?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  corecapitalratio_prev?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  costincomeratio?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  costincomeratio_prev?: Maybe<Scalars['Float']['output']>;
  employees?: Maybe<Scalars['Int']['output']>;
  employees_delta?: Maybe<Scalars['Float']['output']>;
  footnote?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  industry?: Maybe<Tt500CompanyIndustry>;
  /** TODO: Describe this field */
  netinterestmargin?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  netinterestmargin_prev?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  ranking?: Maybe<Scalars['Int']['output']>;
  /** TODO: Describe this field */
  ranking_hidden?: Maybe<Scalars['Boolean']['output']>;
  ranking_prev?: Maybe<Scalars['Int']['output']>;
  /** TODO: Describe this field */
  returnonequity?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  returnonequity_prev?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  share_commissionresult?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  share_commissionresult_prev?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  share_netinterestincome?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  share_netinterestincome_prev?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  share_tradingresult?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  share_tradingresult_prev?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  totalassets?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  totalassets_delta?: Maybe<Scalars['Float']['output']>;
  year: Scalars['Int']['output'];
};

export type Tt500FinanceReportBanksPagination = {
  __typename?: 'TT500FinanceReportBanksPagination';
  data?: Maybe<Array<Tt500FinanceReportBank>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Tt500FinanceReportDefault = Tt500ResultInterface & {
  __typename?: 'TT500FinanceReportDefault';
  accounting_type?: Maybe<Tt500AccountingType>;
  annoation?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Tt500Company>;
  /** TODO: Describe this field */
  ebit?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  ebit_prev?: Maybe<Scalars['Float']['output']>;
  employees?: Maybe<Scalars['Int']['output']>;
  employees_delta?: Maybe<Scalars['Float']['output']>;
  employees_increase?: Maybe<Scalars['Int']['output']>;
  employees_prev?: Maybe<Scalars['Int']['output']>;
  footnote?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  industry?: Maybe<Tt500CompanyIndustry>;
  /** TODO: Describe this field */
  netrevenue?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  netrevenue_delta?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  ranking?: Maybe<Scalars['Int']['output']>;
  ranking_difference?: Maybe<Scalars['Int']['output']>;
  /** TODO: Describe this field */
  ranking_hidden?: Maybe<Scalars['Boolean']['output']>;
  ranking_prev?: Maybe<Scalars['Int']['output']>;
  year: Scalars['Int']['output'];
  /** The timeframe of the buisness year */
  year_financial?: Maybe<Scalars['String']['output']>;
};

export type Tt500FinanceReportInsurance = Tt500ResultInterface & {
  __typename?: 'TT500FinanceReportInsurance';
  accounting_type?: Maybe<Tt500AccountingType>;
  annoation?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Tt500Company>;
  /** TODO: Describe this field */
  damage?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  damage_prev?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  earnedpremium?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  earnedpremium_delta?: Maybe<Scalars['Float']['output']>;
  employees?: Maybe<Scalars['Int']['output']>;
  employees_delta?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  equityratio?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  excess?: Maybe<Scalars['Float']['output']>;
  footnote?: Maybe<Scalars['String']['output']>;
  /** TODO: Describe this field */
  health?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  health_prev?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  industry?: Maybe<Tt500CompanyIndustry>;
  /** TODO: Describe this field */
  life?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  life_prev?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  netcombinedratio?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  netcombinedratio_prev?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  ranking?: Maybe<Scalars['Int']['output']>;
  /** TODO: Describe this field */
  ranking_hidden?: Maybe<Scalars['Boolean']['output']>;
  ranking_prev?: Maybe<Scalars['Int']['output']>;
  /** TODO: Describe this field */
  return?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  solvencyratio?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  solvencyratio_prev?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  unitlinked?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  unitlinked_prev?: Maybe<Scalars['Float']['output']>;
  year: Scalars['Int']['output'];
  /** TODO: Describe this field */
  yield?: Maybe<Scalars['Float']['output']>;
  /** TODO: Describe this field */
  yield_prev?: Maybe<Scalars['Float']['output']>;
};

export type Tt500FinanceReportInsurancesPagination = {
  __typename?: 'TT500FinanceReportInsurancesPagination';
  data?: Maybe<Array<Tt500FinanceReportInsurance>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Tt500FinanceReportPagination = {
  __typename?: 'TT500FinanceReportPagination';
  data?: Maybe<Array<Tt500FinanceReportDefault>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Tt500Industry = {
  __typename?: 'TT500Industry';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  published?: Maybe<Scalars['Boolean']['output']>;
};

export type Tt500Person = {
  __typename?: 'TT500Person';
  firstname: Scalars['String']['output'];
  gender: Tt500PersonGender;
  id: Scalars['ID']['output'];
  lastname: Scalars['String']['output'];
  positions?: Maybe<Array<Tt500PersonPosition>>;
};

export enum Tt500PersonGender {
  Divers = 'DIVERS',
  Female = 'FEMALE',
  Male = 'MALE',
  Unknown = 'UNKNOWN'
}

export type Tt500PersonPagination = {
  __typename?: 'TT500PersonPagination';
  data?: Maybe<Array<Tt500Person>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Tt500PersonPosition = {
  __typename?: 'TT500PersonPosition';
  company?: Maybe<Tt500Company>;
  firstname?: Maybe<Scalars['String']['output']>;
  function?: Maybe<Scalars['String']['output']>;
  gender: Tt500PersonGender;
  id: Scalars['ID']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};

export type Tt500ResultInterface = {
  accounting_type?: Maybe<Tt500AccountingType>;
  annoation?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Tt500Company>;
  employees?: Maybe<Scalars['Int']['output']>;
  employees_delta?: Maybe<Scalars['Float']['output']>;
  footnote?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  owner?: Maybe<Scalars['String']['output']>;
  ranking?: Maybe<Scalars['Int']['output']>;
  ranking_prev?: Maybe<Scalars['Int']['output']>;
  year: Scalars['Int']['output'];
};

export type Tt500UpdateCompany = {
  asset_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  management?: InputMaybe<Array<Tt500CompanyPosition>>;
  name?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  reports?: InputMaybe<Array<Tt500CompanyUpdateReport>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  type: Tt500CompanyType;
  web?: InputMaybe<Scalars['String']['input']>;
};

export type Tt500UpdatePerson = {
  firstname: Scalars['String']['input'];
  gender?: InputMaybe<Tt500PersonGender>;
  id: Scalars['ID']['input'];
  lastname: Scalars['String']['input'];
};

export type TvChannel = {
  __typename?: 'TVChannel';
  /** Published */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** Article id */
  article_id?: Maybe<Scalars['String']['output']>;
  /** Custom open graph description */
  custom_open_graph_description?: Maybe<Scalars['String']['output']>;
  /** Open graph title */
  custom_open_graph_title?: Maybe<Scalars['String']['output']>;
  /** Twitter custom description */
  custom_twitter_description?: Maybe<Scalars['String']['output']>;
  /** Custom twitter title */
  custom_twitter_title?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Logo */
  logo?: Maybe<Asset>;
  /** Mediapress identifier */
  mediapress_id?: Maybe<Scalars['String']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Name of the channel */
  name?: Maybe<Scalars['String']['output']>;
  /** No follow */
  no_follow?: Maybe<Scalars['Boolean']['output']>;
  /** Should that entry be index */
  no_index?: Maybe<Scalars['Boolean']['output']>;
  /** Open graph description */
  open_graph_description?: Maybe<Scalars['String']['output']>;
  /** Phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** Redirect url */
  redirect?: Maybe<Scalars['String']['output']>;
  /** Showtimes now playing */
  showtimeNow?: Maybe<TvChannelShowtime>;
  /** Showtimes */
  showtimes?: Maybe<TvChannelShowtimePaginator>;
  /** Showtimes predefined */
  showtimesProgram?: Maybe<TvChannelShowtimePaginator>;
  /** Showtimes for today */
  showtimesToday?: Maybe<TvChannelShowtimePaginator>;
  /** Showtimes upcoming or between a range */
  showtimesUpcoming?: Maybe<TvChannelShowtimePaginator>;
  /** Slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Sort */
  sort?: Maybe<Scalars['Int']['output']>;
  /** Twitter description mode */
  twitter_description?: Maybe<Scalars['String']['output']>;
  /** Type within the service entity */
  type?: Maybe<Scalars['String']['output']>;
  /** Url */
  url?: Maybe<Scalars['String']['output']>;
};


export type TvChannelRedirectArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TvChannelShowtimesArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<DateRange>;
};


export type TvChannelShowtimesProgramArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type TvChannelShowtimesTodayArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type TvChannelShowtimesUpcomingArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  until?: InputMaybe<Scalars['DateTime']['input']>;
};

/** A paginated list of TVChannel items. */
export type TvChannelPaginator = {
  __typename?: 'TVChannelPaginator';
  /** A list of TVChannel items. */
  data: Array<TvChannel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TvChannelShowtime = {
  __typename?: 'TVChannelShowtime';
  /** Text summary of actors */
  actors_summary?: Maybe<Scalars['String']['output']>;
  /** Asset id */
  asset_id?: Maybe<Scalars['String']['output']>;
  /** Assets for the movie */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Basecontent ID */
  basecontent_id?: Maybe<Scalars['String']['output']>;
  /** TV Channel information */
  channel?: Maybe<TvChannel>;
  channel_id?: Maybe<Scalars['String']['output']>;
  /** Content ID */
  content_id?: Maybe<Scalars['String']['output']>;
  /** Production countries */
  countries?: Maybe<Scalars['String']['output']>;
  /** Text summary of directors */
  directors_summary?: Maybe<Scalars['String']['output']>;
  /** Entity. This can be a movie or show. */
  entity?: Maybe<Entity>;
  /** Episode number if show */
  episode?: Maybe<Scalars['Int']['output']>;
  /** Event ID */
  event_id?: Maybe<Scalars['String']['output']>;
  /** Single genre text */
  genre?: Maybe<Scalars['String']['output']>;
  /** Does this entry have any kinds of subtitles */
  has_subtitles?: Maybe<Scalars['Boolean']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Asset for the preview */
  image?: Maybe<Asset>;
  /** Is this showtime in 4K? */
  is_4k?: Maybe<Scalars['Boolean']['output']>;
  /** Is this showtime in HD? */
  is_hd?: Maybe<Scalars['Boolean']['output']>;
  /** Is it a live event? */
  is_live?: Maybe<Scalars['Boolean']['output']>;
  /** Is sport related? */
  is_sport?: Maybe<Scalars['Boolean']['output']>;
  /** Is this showtime in stereo? */
  is_stereo?: Maybe<Scalars['Boolean']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Season number if show */
  season?: Maybe<Scalars['Int']['output']>;
  /** If it is a sport what kind of sport is it */
  sport?: Maybe<Scalars['String']['output']>;
  /** When will this showtime start */
  start?: Maybe<Scalars['DateTime']['output']>;
  /** Starttime as string */
  start_time?: Maybe<Scalars['String']['output']>;
  /** When will this stowtime stop */
  stop?: Maybe<Scalars['DateTime']['output']>;
  /** Stoptime as string */
  stop_time?: Maybe<Scalars['String']['output']>;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Summary text of the episode */
  summary?: Maybe<Scalars['String']['output']>;
  /** Title of the show */
  title?: Maybe<Scalars['String']['output']>;
  /** Type */
  type?: Maybe<Scalars['String']['output']>;
  /** Year */
  year?: Maybe<Scalars['Int']['output']>;
};


export type TvChannelShowtimeSummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A paginated list of TVChannelShowtime items. */
export type TvChannelShowtimePaginator = {
  __typename?: 'TVChannelShowtimePaginator';
  /** A list of TVChannelShowtime items. */
  data: Array<TvChannelShowtime>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TableColumn = TableColumnAsset | TableColumnBoolean | TableColumnFloat | TableColumnInteger | TableColumnSimple;

export type TableColumnAsset = {
  __typename?: 'TableColumnAsset';
  asset?: Maybe<Asset>;
};


export type TableColumnAssetAssetArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type TableColumnBoolean = {
  __typename?: 'TableColumnBoolean';
  text?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Boolean']['output']>;
};


export type TableColumnBooleanTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableColumnFloat = {
  __typename?: 'TableColumnFloat';
  text?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};


export type TableColumnFloatTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableColumnInteger = {
  __typename?: 'TableColumnInteger';
  text?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};


export type TableColumnIntegerTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableColumnSimple = {
  __typename?: 'TableColumnSimple';
  text?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};


export type TableColumnSimpleTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableRow = {
  __typename?: 'TableRow';
  /** Columns */
  columns?: Maybe<Array<Maybe<TableColumn>>>;
};

export type Team = {
  __typename?: 'Team';
  /** Team description */
  description?: Maybe<Scalars['String']['output']>;
  /** Id of team */
  id: Scalars['ID']['output'];
  /** Portal */
  portal?: Maybe<Scalars['String']['output']>;
  /** Slug of the team */
  slug?: Maybe<Scalars['String']['output']>;
  /** Team member */
  team?: Maybe<Array<Maybe<TeamMember>>>;
  /** Team name */
  title?: Maybe<Scalars['String']['output']>;
};


export type TeamDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  /** Position */
  position?: Maybe<Scalars['String']['output']>;
  /** User information */
  user?: Maybe<User>;
};

export type Text = {
  __typename?: 'Text';
  headline?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};


export type TextTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Topic = {
  __typename?: 'Topic';
  /** Ad settings for the page */
  ad_settings?: Maybe<AdSetting>;
  /** Advertorial entry */
  advertorial?: Maybe<Scalars['Boolean']['output']>;
  /** Advertorial text */
  advertorial_text?: Maybe<Scalars['String']['output']>;
  /** Related articles */
  articles?: Maybe<ArticlePaginatorSimple>;
  /** Content elements */
  content?: Maybe<Array<Maybe<ContentElement>>>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  /** Disable ads */
  disable_ads?: Maybe<Scalars['Boolean']['output']>;
  /** Content elements for the footer */
  footer_content?: Maybe<Array<Maybe<ContentElement>>>;
  /** Id of the topic */
  id?: Maybe<Scalars['ID']['output']>;
  image_mode?: Maybe<Scalars['String']['output']>;
  /** Images for the topic */
  images?: Maybe<Array<Maybe<TopicImage>>>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** More teaser is used for boxes */
  more_teaser?: Maybe<Scalars['String']['output']>;
  more_teaser_headline?: Maybe<Scalars['String']['output']>;
  /** More teaser image should be used in an overview box */
  more_teaser_image?: Maybe<Asset>;
  /** Oewa data */
  oewa?: Maybe<Oewa>;
  /** Is the entry published  */
  published?: Maybe<Scalars['Boolean']['output']>;
  /** Slug for the topic. Can be used to query the entry */
  slug?: Maybe<Scalars['String']['output']>;
  /** Subhealdine for the topic */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Title of the topic */
  title?: Maybe<Scalars['String']['output']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  /** Url to the topic */
  url?: Maybe<Scalars['String']['output']>;
};


export type TopicArticlesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type TopicMore_TeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicMore_Teaser_ImageArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type TopicCluster = {
  __typename?: 'TopicCluster';
  id: Scalars['ID']['output'];
  portal?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Maybe<Topic>>>;
};

export type TopicClustersPaginatorSimple = {
  __typename?: 'TopicClustersPaginatorSimple';
  data?: Maybe<Array<Maybe<TopicCluster>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type TopicImage = {
  __typename?: 'TopicImage';
  image?: Maybe<Asset>;
  url?: Maybe<Scalars['String']['output']>;
};


export type TopicImageImageArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type TopicsPaginatorSimple = {
  __typename?: 'TopicsPaginatorSimple';
  data?: Maybe<Array<Maybe<Topic>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Trailer = {
  __typename?: 'Trailer';
  /** Format for the trailer  */
  format?: Maybe<Scalars['String']['output']>;
  /** Unique Id */
  id: Scalars['ID']['output'];
  /** The related movie */
  movie?: Maybe<Movie>;
  /** Tmdb ID */
  tmdb_id?: Maybe<Scalars['String']['output']>;
  /** Link to the trailer */
  url?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of Trailer items. */
export type TrailerPaginator = {
  __typename?: 'TrailerPaginator';
  /** A list of Trailer items. */
  data: Array<Trailer>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
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

export type TvmEntity = {
  __typename?: 'TvmEntity';
  /** Backdrop image */
  backdrop_image?: Maybe<TvmEntityAsset>;
  /** Cover image */
  cover_image?: Maybe<TvmEntityAsset>;
  /** Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Summary text */
  summary?: Maybe<Scalars['String']['output']>;
  /** Title of the entity */
  title?: Maybe<Scalars['String']['output']>;
  /** Type of element */
  type?: Maybe<Scalars['String']['output']>;
  /** Year */
  year?: Maybe<Scalars['Int']['output']>;
};


export type TvmEntitySummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TvmEntityAsset = {
  __typename?: 'TvmEntityAsset';
  file?: Maybe<TvmEntityAssetPath>;
};

export type TvmEntityAssetPath = {
  __typename?: 'TvmEntityAssetPath';
  path?: Maybe<Scalars['String']['output']>;
  path_original?: Maybe<Scalars['String']['output']>;
};

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  /** Articles from the user */
  articles?: Maybe<ArticlePaginatorSimple>;
  /** Avatar image of the user. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  avatar?: Maybe<Asset>;
  /** When the account was created. */
  created_at?: Maybe<Scalars['DateTime']['output']>;
  /** Description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique email address. */
  email?: Maybe<Scalars['String']['output']>;
  /** When the email was verified. */
  email_verified_at?: Maybe<Scalars['DateTime']['output']>;
  /** Facebook Account for the user */
  facebook?: Maybe<Scalars['String']['output']>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** Instagram Account for the user */
  instagram?: Maybe<Scalars['String']['output']>;
  /** LinkedIn Account for the user */
  linkedin?: Maybe<Scalars['String']['output']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Non-unique name. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of permissions */
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Team position in context */
  position?: Maybe<Scalars['String']['output']>;
  /** Profile link */
  profile?: Maybe<Scalars['String']['output']>;
  /** Slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Tiktok Account for the user */
  tiktok?: Maybe<Scalars['String']['output']>;
  /** Twitter Account for the user */
  twitter?: Maybe<Scalars['String']['output']>;
  /** When the account was last updated. */
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  /** Website for the user */
  website?: Maybe<Scalars['String']['output']>;
};


/** Account of a person who utilizes this application. */
export type UserArticlesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
};


/** Account of a person who utilizes this application. */
export type UserAvatarArgs = {
  fit?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** Account of a person who utilizes this application. */
export type UserDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Watch links for a movie or show. */
export type WatchLink = {
  __typename?: 'WatchLink';
  /** Currency */
  currency?: Maybe<Scalars['String']['output']>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** Deeplink to the portal */
  link?: Maybe<Scalars['String']['output']>;
  /** Movie */
  movie?: Maybe<Movie>;
  /** Price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Pricing model */
  pricing?: Maybe<Scalars['String']['output']>;
  /** Provider */
  provider?: Maybe<Scalars['String']['output']>;
  /** Provider */
  providerEntry?: Maybe<Provider>;
  /** Show */
  show?: Maybe<Show>;
  /** Tmdb ID */
  tmdb_id?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of WatchLink items. */
export type WatchLinkPaginator = {
  __typename?: 'WatchLinkPaginator';
  /** A list of WatchLink items. */
  data: Array<WatchLink>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<WhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<WhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']['input']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

export type UpdateMooncalendarInput = {
  ascendent?: InputMaybe<Scalars['String']['input']>;
  bad_bodycare?: InputMaybe<Scalars['Boolean']['input']>;
  bad_cleaning?: InputMaybe<Scalars['Boolean']['input']>;
  bad_cleaning_windows?: InputMaybe<Scalars['Boolean']['input']>;
  bad_cuthair?: InputMaybe<Scalars['Boolean']['input']>;
  bad_facecare?: InputMaybe<Scalars['Boolean']['input']>;
  bad_laundry?: InputMaybe<Scalars['Boolean']['input']>;
  bad_love?: InputMaybe<Scalars['Boolean']['input']>;
  bad_nails?: InputMaybe<Scalars['Boolean']['input']>;
  bad_party?: InputMaybe<Scalars['Boolean']['input']>;
  bad_planting?: InputMaybe<Scalars['Boolean']['input']>;
  bad_traveling?: InputMaybe<Scalars['Boolean']['input']>;
  bad_waterplants?: InputMaybe<Scalars['Boolean']['input']>;
  good_bodycare?: InputMaybe<Scalars['Boolean']['input']>;
  good_cleaning?: InputMaybe<Scalars['Boolean']['input']>;
  good_cleaning_windows?: InputMaybe<Scalars['Boolean']['input']>;
  good_cuthair?: InputMaybe<Scalars['Boolean']['input']>;
  good_facecare?: InputMaybe<Scalars['Boolean']['input']>;
  good_laundry?: InputMaybe<Scalars['Boolean']['input']>;
  good_love?: InputMaybe<Scalars['Boolean']['input']>;
  good_nails?: InputMaybe<Scalars['Boolean']['input']>;
  good_party?: InputMaybe<Scalars['Boolean']['input']>;
  good_planting?: InputMaybe<Scalars['Boolean']['input']>;
  good_traveling?: InputMaybe<Scalars['Boolean']['input']>;
  good_waterplants?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  zodiac?: InputMaybe<Scalars['String']['input']>;
};

export type SubscribeToNewsletterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  newsletter: Scalars['ID']['input'];
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type SubscribeToNewsletterMutation = { __typename?: 'Mutation', subscribeToNewsletter?: { __typename?: 'NewsletterSubcriptionResult', success?: boolean | null, redirect_url?: string | null } | null };

export type AdsFragment = { __typename?: 'AdSetting', top?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, billboard?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, right1?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, right2?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, left?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, cad1?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, cad2?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, cad3?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, mobile_cad1?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, mobile_cad2?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, mobile_top?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, mobile_bottom?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null };

export type AdDetailsFragment = { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null };

export const AdDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdSettingConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"yieldLab"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"yieldlabAdslotVal"}},{"kind":"Field","name":{"kind":"Name","value":"yieldlabAdsCheckId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"breakpoints"}}]}}]} as unknown as DocumentNode<AdDetailsFragment, unknown>;
export const AdsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Ads"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdSetting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"right1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"right2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"left"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cad1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cad2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cad3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobile_cad1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobile_cad2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobile_top"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobile_bottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdSettingConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"yieldLab"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"yieldlabAdslotVal"}},{"kind":"Field","name":{"kind":"Name","value":"yieldlabAdsCheckId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"breakpoints"}}]}}]} as unknown as DocumentNode<AdsFragment, unknown>;
export const SubscribeToNewsletterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubscribeToNewsletter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newsletter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"salutation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribeToNewsletter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"newsletter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newsletter"}}},{"kind":"Argument","name":{"kind":"Name","value":"salutation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"salutation"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"redirect_url"}}]}}]}}]} as unknown as DocumentNode<SubscribeToNewsletterMutation, SubscribeToNewsletterMutationVariables>;