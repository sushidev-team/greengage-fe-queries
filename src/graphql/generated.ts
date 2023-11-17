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
  Date: any;
  DateTime: any;
  Mixed: any;
  Upload: any;
};

export type AdSetting = {
  __typename?: 'AdSetting';
  billboard?: Maybe<AdSettingConfig>;
  cad1?: Maybe<AdSettingConfig>;
  cad2?: Maybe<AdSettingConfig>;
  cad3?: Maybe<AdSettingConfig>;
  id: Scalars['ID'];
  left?: Maybe<AdSettingConfig>;
  mobile_bottom?: Maybe<AdSettingConfig>;
  mobile_cad1?: Maybe<AdSettingConfig>;
  mobile_cad2?: Maybe<AdSettingConfig>;
  mobile_top?: Maybe<AdSettingConfig>;
  right1?: Maybe<AdSettingConfig>;
  right2?: Maybe<AdSettingConfig>;
  title?: Maybe<Scalars['String']>;
  top?: Maybe<AdSettingConfig>;
};

export type AdSettingConfig = {
  __typename?: 'AdSettingConfig';
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  yieldLab?: Maybe<Array<AdSettingYieldlab>>;
};

export type AdSettingYieldlab = {
  __typename?: 'AdSettingYieldlab';
  yieldlabAdsCheckId?: Maybe<Scalars['Int']>;
  yieldlabAdslotVal?: Maybe<Scalars['Int']>;
};

export type AmazonProduct = {
  __typename?: 'AmazonProduct';
  /** Brand */
  brand?: Maybe<Scalars['String']>;
  /** Currency */
  currency?: Maybe<Scalars['String']>;
  /** Text description */
  description?: Maybe<Scalars['String']>;
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Image */
  image?: Maybe<Scalars['String']>;
  /** Price */
  price?: Maybe<Scalars['Float']>;
  /** Savings */
  savings?: Maybe<Scalars['Float']>;
  /** Saving base price */
  savings_base?: Maybe<Scalars['Float']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Link */
  url?: Maybe<Scalars['String']>;
};

export type Article = ArticleInterface & {
  __typename?: 'Article';
  /** Ad settings for the page */
  ad_settings?: Maybe<AdSetting>;
  /** Advertorial entry */
  advertorial?: Maybe<Scalars['Boolean']>;
  /** Which type of text should be visible in lists */
  advertorial_tag?: Maybe<Scalars['String']>;
  /** Returns the text which should be displayed */
  advertorial_tag_text?: Maybe<Scalars['String']>;
  /** Advertorial entry alternative text */
  advertorial_text?: Maybe<Scalars['String']>;
  /** Alternative keywords for the article */
  alt_keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Authors of the article */
  authors?: Maybe<Array<Maybe<User>>>;
  /** Content elements */
  content?: Maybe<Array<Maybe<ContentElement>>>;
  /** Entry is a cornerstone entry */
  cornerstone?: Maybe<Scalars['Boolean']>;
  cover_gallery?: Maybe<Gallery>;
  /** Over Image. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  cover_image?: Maybe<Asset>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Disable ads for the article */
  disable_ads?: Maybe<Scalars['Boolean']>;
  /** Headline of the article. */
  headline?: Maybe<Scalars['String']>;
  /** Should the authors be not visible */
  hide_authors?: Maybe<Scalars['Boolean']>;
  /** Unique primary key. */
  id?: Maybe<Scalars['ID']>;
  /** Interview participants/persons */
  interview_persons?: Maybe<Array<Maybe<Person>>>;
  /** Main key word for the article */
  keyword?: Maybe<Scalars['String']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Oewa data */
  oewa?: Maybe<Oewa>;
  /** Outbrain compliant */
  outbrain_compliant?: Maybe<Scalars['Boolean']>;
  /** Outbrain deactivated */
  outbrain_disabled?: Maybe<Scalars['Boolean']>;
  /** Paid content settings */
  paid_content?: Maybe<PaidContent>;
  /** Url or path for the article. */
  path?: Maybe<Scalars['String']>;
  /** Portal of the article. */
  portal?: Maybe<Scalars['String']>;
  /** Is the entry published  */
  published?: Maybe<Scalars['Boolean']>;
  /** Published at */
  published_at?: Maybe<Scalars['DateTime']>;
  /** Reading time */
  reading_time?: Maybe<Scalars['Int']>;
  /** Ressort */
  ressort?: Maybe<Ressort>;
  /** Similar articles or related articles */
  similar_articles?: Maybe<Array<Maybe<Article>>>;
  /** Slug or alias for the articles. */
  slug?: Maybe<Scalars['String']>;
  /** Full slug. */
  slug_full?: Maybe<Scalars['String']>;
  /** Teaser of the article */
  teaser?: Maybe<Scalars['String']>;
  /** Topics related to this article */
  topics?: Maybe<Array<Maybe<Topic>>>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type ArticleCover_ImageArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ArticleSimilar_ArticlesArgs = {
  max?: InputMaybe<Scalars['Int']>;
};


export type ArticleSlugArgs = {
  simple?: InputMaybe<Scalars['Boolean']>;
};


export type ArticleTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ArticleInterface = {
  /** Advertorial entry */
  advertorial?: Maybe<Scalars['Boolean']>;
  /** Which type of text should be visible in lists */
  advertorial_tag?: Maybe<Scalars['String']>;
  /** Alternative keywords for the article */
  alt_keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Is this entry a corner stone entry? */
  cornerstone?: Maybe<Scalars['Boolean']>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Headline of the article. */
  headline?: Maybe<Scalars['String']>;
  /** Unique primary key. */
  id?: Maybe<Scalars['ID']>;
  /** Main key word for the article */
  keyword?: Maybe<Scalars['String']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Outbrain compliant */
  outbrain_compliant?: Maybe<Scalars['Boolean']>;
  /** Url or path for the article. */
  path?: Maybe<Scalars['String']>;
  /** Portal of the article. */
  portal?: Maybe<Scalars['String']>;
  /** Is the entry published  */
  published?: Maybe<Scalars['Boolean']>;
  /** Similar articles or related articles */
  similar_articles?: Maybe<Array<Maybe<Article>>>;
  /** Slug or alias for the articles. */
  slug?: Maybe<Scalars['String']>;
  /** Teaser of the article */
  teaser?: Maybe<Scalars['String']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
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
  cover_image?: Maybe<Scalars['String']>;
  /** Article headline */
  headline?: Maybe<Scalars['String']>;
  /** The id within the cms */
  id?: Maybe<Scalars['ID']>;
  /** Url the article */
  path?: Maybe<Scalars['String']>;
};

export type ArticleSubscriptionAd = {
  __typename?: 'ArticleSubscriptionAd';
  button_text?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  /** Title that will be displayed on the message */
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Asset = {
  __typename?: 'Asset';
  /** Alt text for asset */
  alt?: Maybe<Scalars['String']>;
  /** Caption */
  caption?: Maybe<Scalars['String']>;
  /** Copyright */
  copyright?: Maybe<Scalars['String']>;
  /** Orignal path to asset */
  external_path?: Maybe<Scalars['String']>;
  file?: Maybe<GlideData>;
  focus_information?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Height */
  height?: Maybe<Scalars['Int']>;
  /** Id */
  id: Scalars['ID'];
  /** Is audio */
  is_audio?: Maybe<Scalars['Boolean']>;
  /** Is image */
  is_image?: Maybe<Scalars['Boolean']>;
  /** Is video */
  is_video?: Maybe<Scalars['Boolean']>;
  origin?: Maybe<Scalars['String']>;
  /** Original height */
  original_height?: Maybe<Scalars['Int']>;
  /** Original width */
  original_width?: Maybe<Scalars['Int']>;
  /** Path to asset */
  path?: Maybe<Scalars['String']>;
  /** Orignal path to asset */
  path_original?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** Width */
  width?: Maybe<Scalars['Int']>;
};


export type AssetCaptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type AssetFileArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
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
  id?: Maybe<Scalars['String']>;
};

export type ChannelDate = {
  __typename?: 'ChannelDate';
  /** Date end */
  date_end?: Maybe<Scalars['DateTime']>;
  /** Human format for the date */
  date_human?: Maybe<Scalars['String']>;
  /** Date start */
  date_start?: Maybe<Scalars['DateTime']>;
};

/** Cinema entry. */
export type Cinema = {
  __typename?: 'Cinema';
  /** City */
  city?: Maybe<City>;
  /** External Id */
  external_id?: Maybe<Scalars['Int']>;
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Title of the enitity */
  name?: Maybe<Scalars['String']>;
  /** Showtimes */
  showtimes?: Maybe<CinemaShowtimePaginator>;
  /** Showtimes for today */
  showtimesToday?: Maybe<CinemaShowtimePaginator>;
  /** Showtimes today but only upcoming */
  showtimesUpcoming?: Maybe<CinemaShowtimePaginator>;
  /** Url */
  url?: Maybe<Scalars['String']>;
};


/** Cinema entry. */
export type CinemaShowtimesArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<DateRange>;
};


/** Cinema entry. */
export type CinemaShowtimesTodayArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


/** Cinema entry. */
export type CinemaShowtimesUpcomingArgs = {
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['DateTime']>;
  page?: InputMaybe<Scalars['Int']>;
  until?: InputMaybe<Scalars['DateTime']>;
};

export type CinemaDate = {
  __typename?: 'CinemaDate';
  /** Date end */
  date_end?: Maybe<Scalars['DateTime']>;
  /** Human format for the date */
  date_human?: Maybe<Scalars['String']>;
  /** Date start */
  date_start?: Maybe<Scalars['DateTime']>;
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
  title?: Maybe<Scalars['String']>;
};

/** Cinema showtime entry */
export type CinemaShowtime = {
  __typename?: 'CinemaShowtime';
  /** Auditorium */
  auditorium?: Maybe<Scalars['String']>;
  /** Booking link */
  booking_link?: Maybe<Scalars['String']>;
  /** Cinema */
  cinema?: Maybe<Cinema>;
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Movie entry from database */
  movie?: Maybe<Movie>;
  /** Starttime */
  start?: Maybe<Scalars['DateTime']>;
  /** Title of the movie if it doesn not have a relationship to a entry in this service */
  title?: Maybe<Scalars['String']>;
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
  external_id?: Maybe<Scalars['Int']>;
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Title of the enitity */
  name?: Maybe<Scalars['String']>;
  /** State */
  state?: Maybe<Scalars['String']>;
  /** State code */
  state_code?: Maybe<Scalars['String']>;
  /** Zip code */
  zip_code?: Maybe<Scalars['String']>;
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
  advertorial?: Maybe<Scalars['Boolean']>;
  boxes?: Maybe<Array<Maybe<CollageBox>>>;
  /** Disable ads for the article */
  disable_ads?: Maybe<Scalars['Boolean']>;
  /** Id of the topic */
  id?: Maybe<Scalars['ID']>;
  /** Logo */
  logo?: Maybe<Asset>;
  /** Logo Url */
  logo_url?: Maybe<Scalars['String']>;
  /** Modus for the collage */
  mode?: Maybe<Scalars['String']>;
  /** More teaser is used for boxes */
  more_teaser?: Maybe<Scalars['String']>;
  more_teaser_headline?: Maybe<Scalars['String']>;
  /** More teaser image should be used in an overview box */
  more_teaser_image?: Maybe<Asset>;
  /** Oewa data */
  oewa?: Maybe<Oewa>;
  /** Outbrain compliant */
  outbrain_compliant?: Maybe<Scalars['Boolean']>;
  /** Outbrain deactivated */
  outbrain_disabled?: Maybe<Scalars['Boolean']>;
  /** Portal for the collage */
  portal?: Maybe<Scalars['String']>;
  /** Slug for the topic. Can be used to query the entry */
  slug?: Maybe<Scalars['String']>;
  social_media?: Maybe<Array<Maybe<CollageSocialMedia>>>;
  /** Subhealdine for the topic */
  subtitle?: Maybe<Scalars['String']>;
  /** Teaser for this collage */
  teaser?: Maybe<Scalars['String']>;
  /** Title of the topic */
  title?: Maybe<Scalars['String']>;
};


export type CollageMore_TeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type CollageMore_Teaser_ImageArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type CollageTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type CollageBox = {
  __typename?: 'CollageBox';
  /** Description for this collage box */
  description?: Maybe<Scalars['String']>;
  /** Hide the complete box? */
  hide?: Maybe<Scalars['Boolean']>;
  /** Image pre hover */
  image?: Maybe<Asset>;
  /** Image hover */
  image_hover?: Maybe<Asset>;
  /** Title for the box */
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type CollageBoxDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type CollageBoxImageArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type CollageBoxImage_HoverArgs = {
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type CollagePaginatorSimple = {
  __typename?: 'CollagePaginatorSimple';
  data?: Maybe<Array<Maybe<Collage>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type CollageSocialMedia = {
  __typename?: 'CollageSocialMedia';
  type?: Maybe<SocialMediaType>;
  url?: Maybe<Scalars['String']>;
};

export type Collection = {
  __typename?: 'Collection';
  /** Description for the collection */
  description?: Maybe<Scalars['String']>;
  /** Id of entry */
  id?: Maybe<Scalars['String']>;
  /** Items of the collection */
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Slug for the entry */
  slug?: Maybe<Scalars['String']>;
  /** Title for the collection */
  title?: Maybe<Scalars['String']>;
};


export type CollectionDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type CompanyGroup = {
  __typename?: 'CompanyGroup';
  /** Group title */
  group_title?: Maybe<Scalars['String']>;
  /** Group values */
  values?: Maybe<Array<Maybe<CompanyGroupValue>>>;
};

export type CompanyGroupValue = {
  __typename?: 'CompanyGroupValue';
  /** Item value */
  item?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

export type CompanyKeyFact = {
  __typename?: 'CompanyKeyFact';
  keyvalue?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentElement = ContentElementAffiliateLinks | ContentElementAffiliateLinksSimple | ContentElementCompanyLogo | ContentElementDownload | ContentElementExternalLinks | ContentElementFaqs | ContentElementGallery | ContentElementGallerySimple | ContentElementIframe | ContentElementImage | ContentElementInfobox | ContentElementInfogram | ContentElementInterview | ContentElementList | ContentElementListicle | ContentElementNewsletter | ContentElementPodcastSimple | ContentElementPodigee | ContentElementProcontra | ContentElementProfileCompany | ContentElementProfilePerson | ContentElementProfileTvm | ContentElementQualifio | ContentElementQuote | ContentElementRecipe | ContentElementReference | ContentElementSimilarArticles | ContentElementSocialMedia | ContentElementSubscriptionAd | ContentElementTable | ContentElementTableOfContents | ContentElementTeams | ContentElementText | ContentElementTextimage | ContentElementTicker | ContentElementTopics | ContentElementTracdelight | ContentElementVideo;

export type ContentElementAffiliateLinks = {
  __typename?: 'ContentElementAffiliateLinks';
  /** Partner */
  affiliate_partner?: Maybe<Scalars['String']>;
  /** Style */
  affiliate_style?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Products */
  products?: Maybe<Array<Maybe<AmazonProduct>>>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementAffiliateLinksSimple = {
  __typename?: 'ContentElementAffiliateLinksSimple';
  /** Partner */
  affiliate_partner?: Maybe<Scalars['String']>;
  iframe_url?: Maybe<Scalars['String']>;
};

export type ContentElementCompanyLogo = {
  __typename?: 'ContentElementCompanyLogo';
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Company logo */
  logo?: Maybe<Asset>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Social media links */
  social_media?: Maybe<Array<Maybe<CollageSocialMedia>>>;
  /** This text should be placed after the logo */
  text_after?: Maybe<Scalars['String']>;
  /** This text should be placed before the logo */
  text_before?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentElementDownload = {
  __typename?: 'ContentElementDownload';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Files. */
  files?: Maybe<Array<Maybe<Asset>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Source */
  source?: Maybe<Scalars['String']>;
  /** Teaser test for the download. */
  teaser?: Maybe<Scalars['String']>;
};


export type ContentElementDownloadTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ContentElementExternalLinks = {
  __typename?: 'ContentElementExternalLinks';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Links collection id */
  link_collection_id?: Maybe<Scalars['ID']>;
  /** Links - will be async loaded */
  links?: Maybe<Array<Maybe<Link>>>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementFaqs = {
  __typename?: 'ContentElementFaqs';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Amount of columns */
  columns_amount?: Maybe<Scalars['Int']>;
  /** Questions */
  faqs?: Maybe<Array<Maybe<Faq>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementGallery = {
  __typename?: 'ContentElementGallery';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Autoplay */
  autoplay?: Maybe<Scalars['Boolean']>;
  /** Gallery item */
  gallery?: Maybe<Gallery>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Gallery display mode */
  mode?: Maybe<Scalars['String']>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementGallerySimple = {
  __typename?: 'ContentElementGallerySimple';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  columns_amount?: Maybe<Scalars['Int']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<Asset>>>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementIframe = {
  __typename?: 'ContentElementIframe';
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  iframe_url?: Maybe<Scalars['String']>;
  max_width?: Maybe<Scalars['Int']>;
  min_height?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementImage = Headline & {
  __typename?: 'ContentElementImage';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Caption text for image */
  caption?: Maybe<Scalars['String']>;
  /** Copyright text for image */
  copyright?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Image path. If 'image not resize' is active the height and the fit property will not be used. */
  image?: Maybe<Asset>;
  image_mode?: Maybe<Scalars['String']>;
  /** @deprecated Use `image_mode`. */
  image_no_resize?: Maybe<Scalars['Boolean']>;
  no_caption?: Maybe<Scalars['Boolean']>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Link for the image */
  url?: Maybe<Scalars['String']>;
};


export type ContentElementImageCaptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type ContentElementImageImageArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ContentElementInfobox = {
  __typename?: 'ContentElementInfobox';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Infobox entries */
  entries?: Maybe<Array<Maybe<Text>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Style */
  style?: Maybe<Scalars['String']>;
};

export type ContentElementInfogram = {
  __typename?: 'ContentElementInfogram';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Infogram ID */
  infogram_id?: Maybe<Scalars['String']>;
  max_width?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementInterview = {
  __typename?: 'ContentElementInterview';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Interview dialog parts */
  dialog?: Maybe<Array<Maybe<InterviewPart>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementList = {
  __typename?: 'ContentElementList';
  items?: Maybe<Array<Maybe<ContentElementListItem>>>;
  mode?: Maybe<Scalars['String']>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementListItem = {
  __typename?: 'ContentElementListItem';
  /** Text. */
  description?: Maybe<Scalars['String']>;
  /** Bullet point list item headline */
  headline?: Maybe<Scalars['String']>;
};


export type ContentElementListItemDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ContentElementListicle = {
  __typename?: 'ContentElementListicle';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  entities?: Maybe<Array<Maybe<EntityEntry>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Listicle items */
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Sorting direction of the listicle */
  listicle_sorting?: Maybe<Scalars['String']>;
  /** Style of the listicle */
  listicle_style?: Maybe<Scalars['String']>;
  /** Type of listicle */
  listicle_type?: Maybe<Scalars['String']>;
};

export type ContentElementNewsletter = {
  __typename?: 'ContentElementNewsletter';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Distribution list id provided by mailion */
  newsletter?: Maybe<Newsletter>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Teaser for the download. */
  teaser?: Maybe<Scalars['String']>;
};


export type ContentElementNewsletterTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ContentElementPodcastSimple = {
  __typename?: 'ContentElementPodcastSimple';
  /** Description of the episode */
  description?: Maybe<Scalars['String']>;
  /** Image */
  image?: Maybe<Asset>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Podcast title */
  title?: Maybe<Scalars['String']>;
  /** Episode title */
  title_episode?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type ContentElementPodcastSimpleDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ContentElementPodigee = {
  __typename?: 'ContentElementPodigee';
  cover_image?: Maybe<Scalars['String']>;
  episode_id?: Maybe<Scalars['String']>;
  episode_title?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  show_percent?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentElementProcontra = {
  __typename?: 'ContentElementProcontra';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  contra?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  pro?: Maybe<Array<Maybe<Scalars['String']>>>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementProfileCompany = {
  __typename?: 'ContentElementProfileCompany';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<CompanyGroup>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Image / Logo */
  image?: Maybe<Asset>;
  /** Industry */
  industry?: Maybe<Scalars['String']>;
  keyfacts?: Maybe<Array<Maybe<CompanyKeyFact>>>;
  link?: Maybe<Scalars['String']>;
  /** Name of the company */
  name?: Maybe<Scalars['String']>;
  show_percent?: Maybe<Scalars['Int']>;
};


export type ContentElementProfileCompanyIndustryArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ContentElementProfilePerson = {
  __typename?: 'ContentElementProfilePerson';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  custom?: Maybe<Array<Maybe<ContentElementProfilePersonItem>>>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  hide_information?: Maybe<Array<Maybe<Scalars['String']>>>;
  links?: Maybe<Array<Maybe<ContentElementProfilePersonLink>>>;
  person?: Maybe<Person>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementProfilePersonItem = {
  __typename?: 'ContentElementProfilePersonItem';
  /** Text. */
  description?: Maybe<Scalars['String']>;
  /** Title for the item */
  headline?: Maybe<Scalars['String']>;
};


export type ContentElementProfilePersonItemDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ContentElementProfilePersonLink = {
  __typename?: 'ContentElementProfilePersonLink';
  /** Link */
  link?: Maybe<Scalars['String']>;
  /** Link text */
  link_text?: Maybe<Scalars['String']>;
  /**
   * Link text
   * @deprecated Use link_text
   */
  linktext?: Maybe<Scalars['String']>;
  /** Should the link open in a new window */
  target_blank?: Maybe<Scalars['Boolean']>;
};

export type ContentElementProfileTvm = {
  __typename?: 'ContentElementProfileTvm';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Style */
  modus?: Maybe<Scalars['String']>;
  person?: Maybe<Person>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementQualifio = {
  __typename?: 'ContentElementQualifio';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Float']>;
  iframe_url?: Maybe<Scalars['String']>;
  show_percent?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Float']>;
};

export type ContentElementQuote = {
  __typename?: 'ContentElementQuote';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Image */
  image?: Maybe<Asset>;
  /** The mode to display the element */
  mode?: Maybe<Scalars['String']>;
  /** Quote */
  quote?: Maybe<Quote>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementRecipe = {
  __typename?: 'ContentElementRecipe';
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<Array<Maybe<ContentElementRecipeIngridient>>>;
  recipe_level?: Maybe<Scalars['String']>;
  recipe_time?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<Maybe<ContentElementRecipeStep>>>;
};

export type ContentElementRecipeIngridient = {
  __typename?: 'ContentElementRecipeIngridient';
  amount?: Maybe<Scalars['String']>;
  ingredient?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContentElementRecipeStep = {
  __typename?: 'ContentElementRecipeStep';
  /** Image */
  image?: Maybe<Asset>;
  /** Text. */
  text?: Maybe<Scalars['String']>;
};


export type ContentElementRecipeStepTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ContentElementReference = {
  __typename?: 'ContentElementReference';
  links?: Maybe<Array<ContentElementReferenceLink>>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementReferenceLink = {
  __typename?: 'ContentElementReferenceLink';
  /** Link to the reference */
  link?: Maybe<Scalars['String']>;
  /** Link text. */
  link_text?: Maybe<Scalars['String']>;
  /** Link should open in new tab or window */
  target_blank?: Maybe<Scalars['Boolean']>;
};

export type ContentElementSimilarArticles = {
  __typename?: 'ContentElementSimilarArticles';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  keyword?: Maybe<Array<Maybe<Scalars['String']>>>;
  show_percent?: Maybe<Scalars['Int']>;
  similar_articles?: Maybe<Array<Maybe<Article>>>;
};


export type ContentElementSimilarArticlesSimilar_ArticlesArgs = {
  max?: InputMaybe<Scalars['Int']>;
};

export type ContentElementSocialEmbed = {
  __typename?: 'ContentElementSocialEmbed';
  /** The unique identifier to embed the element */
  id?: Maybe<Scalars['String']>;
  /** Type of social embed */
  network?: Maybe<Scalars['String']>;
};

export type ContentElementSocialMedia = {
  __typename?: 'ContentElementSocialMedia';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Will be ignores for twitter */
  height?: Maybe<Scalars['Int']>;
  /** Network (like facebook,twitter etc.) */
  network?: Maybe<SocialMediaNetwork>;
  /** The actual id for the entry */
  network_id?: Maybe<Scalars['String']>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementSubscriptionAd = {
  __typename?: 'ContentElementSubscriptionAd';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
};

export type ContentElementTable = {
  __typename?: 'ContentElementTable';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Caption for the table */
  caption?: Maybe<Scalars['String']>;
  /** Widths in fr unit */
  columns_width?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** Requires loading by client */
  file?: Maybe<Scalars['String']>;
  /** First column is a header column */
  first_column_header?: Maybe<Scalars['Boolean']>;
  /** First row is a header row */
  first_row_header?: Maybe<Scalars['Boolean']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Last column is a 'header' row */
  last_row_header?: Maybe<Scalars['Boolean']>;
  /** Requires loading by client */
  manual_loading_required?: Maybe<Scalars['Boolean']>;
  /** Data rows */
  rows?: Maybe<Array<Maybe<TableRow>>>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Sortable columns */
  sortable_columns?: Maybe<Scalars['Boolean']>;
  /** Type */
  type?: Maybe<Scalars['String']>;
};


export type ContentElementTableCaptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ContentElementTableOfContents = {
  __typename?: 'ContentElementTableOfContents';
  /** List of headlines as a tree */
  list?: Maybe<Array<Maybe<ContentElementTableOfContentsChild>>>;
  /** Should the table of content be open */
  list_expanded?: Maybe<Scalars['Boolean']>;
  /** Max level */
  max_level?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementTableOfContentsChild = {
  __typename?: 'ContentElementTableOfContentsChild';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Children */
  children?: Maybe<Array<Maybe<ContentElementTableOfContentsChild>>>;
  /** Headline */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** ID */
  id?: Maybe<Scalars['String']>;
  show_percent?: Maybe<Scalars['Int']>;
};

export type ContentElementTeams = {
  __typename?: 'ContentElementTeams';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** Display mode for the list */
  mode?: Maybe<Scalars['String']>;
  show_percent?: Maybe<Scalars['Int']>;
  teams?: Maybe<Array<Maybe<Team>>>;
};

export type ContentElementText = Headline & {
  __typename?: 'ContentElementText';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Text. */
  text?: Maybe<Scalars['String']>;
};


export type ContentElementTextTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ContentElementTextimage = {
  __typename?: 'ContentElementTextimage';
  /** Image */
  image?: Maybe<Asset>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Text for the box */
  text?: Maybe<Scalars['String']>;
};

export type ContentElementTicker = {
  __typename?: 'ContentElementTicker';
  show_percent?: Maybe<Scalars['Int']>;
  ticker_text?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ContentElementTickerTicker_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type ContentElementTopics = {
  __typename?: 'ContentElementTopics';
  /** Articles */
  articles?: Maybe<ArticlePaginatorSimple>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  show_percent?: Maybe<Scalars['Int']>;
};


export type ContentElementTopicsArticlesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type ContentElementTracdelight = {
  __typename?: 'ContentElementTracdelight';
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Tracdelight widget id */
  widget?: Maybe<Scalars['String']>;
};

export type ContentElementVideo = Headline & {
  __typename?: 'ContentElementVideo';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Caption text for video */
  caption?: Maybe<Scalars['String']>;
  /** Copyright text for video */
  copyright?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  /** JWPlayer Embed Code */
  jw_embed?: Maybe<Scalars['String']>;
  /** JWPlayer Id */
  jw_player?: Maybe<Scalars['String']>;
  /** Path */
  path?: Maybe<Scalars['String']>;
  show_percent?: Maybe<Scalars['Int']>;
  /** Video source */
  video_source?: Maybe<Scalars['String']>;
  /** Youtube Id */
  youtube?: Maybe<Scalars['String']>;
};


export type ContentElementVideoCaptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type CountryState = {
  __typename?: 'CountryState';
  /** Code */
  state_code?: Maybe<Scalars['String']>;
  /** Text */
  state_text?: Maybe<Scalars['String']>;
};

export type CreateArticle = {
  advertorial?: InputMaybe<Scalars['Boolean']>;
  advertorial_text?: InputMaybe<Scalars['String']>;
  alt_keywords?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  apa_id?: InputMaybe<Scalars['String']>;
  authors?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Array<InputMaybe<CreateArticleContent>>>;
  cornerstone?: InputMaybe<Scalars['Boolean']>;
  cover_image?: InputMaybe<Scalars['String']>;
  cover_image_alt?: InputMaybe<Scalars['String']>;
  cover_image_caption?: InputMaybe<Scalars['String']>;
  cover_image_copyright?: InputMaybe<Scalars['String']>;
  cover_image_title?: InputMaybe<Scalars['String']>;
  disable_ads?: InputMaybe<Scalars['Boolean']>;
  google_news_title?: InputMaybe<Scalars['String']>;
  headline: Scalars['String'];
  hide_authors?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  import_id?: InputMaybe<Scalars['String']>;
  import_url?: InputMaybe<Scalars['String']>;
  interview_persons?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  keyword?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  no_follow?: InputMaybe<Scalars['Boolean']>;
  no_index?: InputMaybe<Scalars['Boolean']>;
  oewa?: InputMaybe<Scalars['String']>;
  og_description?: InputMaybe<Scalars['String']>;
  og_image?: InputMaybe<Scalars['String']>;
  og_title?: InputMaybe<Scalars['String']>;
  outbrain_compliant?: InputMaybe<Scalars['Boolean']>;
  outbrain_disabled?: InputMaybe<Scalars['Boolean']>;
  portal: Scalars['String'];
  published?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  teaser: Scalars['String'];
  topics?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_description?: InputMaybe<Scalars['String']>;
  twitter_title?: InputMaybe<Scalars['String']>;
};

export type CreateArticleContent = {
  alt?: InputMaybe<Scalars['String']>;
  anchor?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  column_casting?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content?: InputMaybe<Scalars['String']>;
  copyright?: InputMaybe<Scalars['String']>;
  /** CSV File url if the content is a csv file */
  csv_file?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** Podcast id from podigee */
  episode_id?: InputMaybe<Scalars['String']>;
  /** Files for download */
  files?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Define if the first column of the table is a header */
  first_column_header?: InputMaybe<Scalars['Boolean']>;
  /** Define if the first row of the table is a header */
  first_row_header?: InputMaybe<Scalars['Boolean']>;
  has_anchor?: InputMaybe<Scalars['Boolean']>;
  has_headline?: InputMaybe<Scalars['Boolean']>;
  headline?: InputMaybe<Scalars['String']>;
  headline_level?: InputMaybe<Scalars['Int']>;
  /** Iframe url for iframes */
  iframe_url?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  image_alt?: InputMaybe<Scalars['String']>;
  image_link?: InputMaybe<Scalars['String']>;
  image_mode?: InputMaybe<Scalars['String']>;
  image_no_resize?: InputMaybe<Scalars['Boolean']>;
  image_title?: InputMaybe<Scalars['String']>;
  /** Keyfacts */
  infobox_content?: InputMaybe<Array<InputMaybe<CreateArticleContentInfobox>>>;
  /** JW-Id for the video player */
  jw?: InputMaybe<Scalars['String']>;
  /** Define if the last row is a header */
  last_row_header?: InputMaybe<Scalars['Boolean']>;
  listitems?: InputMaybe<Array<InputMaybe<CreateArticleListItem>>>;
  /** Iframe min height */
  min_height?: InputMaybe<Scalars['Int']>;
  /** Lists can have a style mode like bullet */
  mode?: InputMaybe<Scalars['String']>;
  /** Socialmedia Network type */
  network?: InputMaybe<Scalars['String']>;
  /** Socialmedia Network id */
  network_id?: InputMaybe<Scalars['String']>;
  no_caption?: InputMaybe<Scalars['Boolean']>;
  /** Quote text */
  quote?: InputMaybe<Scalars['String']>;
  recipe?: InputMaybe<CreateArticleRecipe>;
  /** Define if the columns of are sortable */
  sortable_columns?: InputMaybe<Scalars['Boolean']>;
  /** Source fo the download */
  source?: InputMaybe<Scalars['String']>;
  /** Table source type */
  source_type?: InputMaybe<Scalars['String']>;
  table_content?: InputMaybe<CreateArticleTable>;
  /** Table of content headline size */
  table_of_contents?: InputMaybe<Scalars['String']>;
  /** Teaser for download */
  teaser?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  video_file?: InputMaybe<Scalars['String']>;
  video_source?: InputMaybe<Scalars['String']>;
  video_url?: InputMaybe<Scalars['String']>;
  /** Widget ID */
  widget?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type CreateArticleContentInfobox = {
  content?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
};

export type CreateArticleListItem = {
  description?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  headline?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CreateArticleRecipe = {
  ingredients?: InputMaybe<Array<InputMaybe<CreateArticleRecipeIngridient>>>;
  recipe_level?: InputMaybe<Scalars['String']>;
  recipe_time?: InputMaybe<Scalars['Int']>;
  recipe_type?: InputMaybe<Scalars['String']>;
  steps?: InputMaybe<Array<InputMaybe<CreateArticleRecipeStep>>>;
};

export type CreateArticleRecipeIngridient = {
  amount?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  ingredient?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CreateArticleRecipeStep = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  image_alt?: InputMaybe<Scalars['String']>;
  image_caption?: InputMaybe<Scalars['String']>;
  image_copyright?: InputMaybe<Scalars['String']>;
  image_title?: InputMaybe<Scalars['String']>;
};

export type CreateArticleTable = {
  rows?: InputMaybe<Array<CreateArticleTableRow>>;
  widths?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type CreateArticleTableColumn = {
  copyright?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type CreateArticleTableRow = {
  columns?: InputMaybe<Array<CreateArticleTableColumn>>;
};

export type CustomerRegistrationResult = {
  __typename?: 'CustomerRegistrationResult';
  /** This code will only be present if an error occurs */
  error_code?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
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
  customer_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type CustomerUserAddress = {
  __typename?: 'CustomerUserAddress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type DateRange = {
  from?: InputMaybe<Scalars['Date']>;
  to?: InputMaybe<Scalars['Date']>;
};

export enum DateType {
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at'
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

/** Entity entry. */
export type Entity = {
  __typename?: 'Entity';
  /** Asset id backdrop image */
  asset_backdrop_id?: Maybe<Scalars['String']>;
  /** Asset id cover image */
  asset_id?: Maybe<Scalars['String']>;
  /** Backdrop image */
  backdrop_image?: Maybe<Asset>;
  /** cover image */
  cover_image?: Maybe<Asset>;
  /** Unique primary key. */
  id?: Maybe<Scalars['String']>;
  /** Slug */
  slug?: Maybe<Scalars['String']>;
  /** Summary */
  summary?: Maybe<Scalars['String']>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']>;
  /** TMDB Id */
  tmdb_id?: Maybe<Scalars['String']>;
  /** Tmdb Score */
  tmdb_score?: Maybe<Scalars['Float']>;
  /** Type of the enitity */
  type?: Maybe<Scalars['String']>;
  /** Year */
  year?: Maybe<Scalars['Int']>;
};


/** Entity entry. */
export type EntitySummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type EntityEntry = Movie | Show;

export type EntityInterface = {
  /** Asset id cover image */
  asset_id?: Maybe<Scalars['String']>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Unique primary key. */
  id: Scalars['ID'];
  /** IMDB Id */
  imdb_id?: Maybe<Scalars['String']>;
  /** Published */
  published?: Maybe<Scalars['Boolean']>;
  /** Run time */
  runtime?: Maybe<Scalars['Int']>;
  /** Shorttitle of the enitity */
  short?: Maybe<Scalars['String']>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']>;
  /** TMDB Id */
  tmdb_id?: Maybe<Scalars['String']>;
  /** Score */
  tmdb_score?: Maybe<Scalars['Float']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
  /** Year of release */
  year?: Maybe<Scalars['Int']>;
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
  actor_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Article ids */
  article_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Image for the episode */
  asset?: Maybe<Asset>;
  /** The main image for this episode. */
  asset_id?: Maybe<Scalars['String']>;
  /** Assets for the person */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']>;
  crew_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** flat list of director ids for the episode */
  director_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** directors for the episode */
  directors?: Maybe<PersonPaginationList>;
  /** Enriched data  */
  enriched?: Maybe<Scalars['Boolean']>;
  /** Genre ids for the movie */
  genre_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Genres for the movie */
  genres?: Maybe<Array<Maybe<Genre>>>;
  /** Unique primary key. */
  id?: Maybe<Scalars['String']>;
  /** Imdb id */
  imdb_id?: Maybe<Scalars['String']>;
  /** Id within the justwatch api */
  justwatch_id?: Maybe<Scalars['String']>;
  /** Watch links */
  links?: Maybe<Array<Maybe<WatchLink>>>;
  /** Mediapress content id */
  mediapress_id?: Maybe<Scalars['String']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Episode number */
  nr?: Maybe<Scalars['Int']>;
  /** persons for the show */
  persons?: Maybe<PersonPaginationList>;
  /** Pubslihed */
  published?: Maybe<Scalars['Boolean']>;
  /** Release date */
  release_date?: Maybe<Scalars['String']>;
  /** Review */
  review?: Maybe<Scalars['String']>;
  /** Reviewed data  */
  reviewed?: Maybe<Scalars['Boolean']>;
  /** Runtime of the single episode */
  runtime?: Maybe<Scalars['Int']>;
  /** Season */
  season?: Maybe<Season>;
  /** Season */
  show?: Maybe<Season>;
  /** Id of the show */
  show_id?: Maybe<Scalars['String']>;
  /** Name of the show */
  show_title?: Maybe<Scalars['String']>;
  /** Showtimes identifier */
  showtimes_id?: Maybe<Scalars['String']>;
  /** Pivot information will only be attached if the querys root is a person. */
  singlePersonMetaInformation?: Maybe<PersonMeta>;
  /** Summary */
  summary?: Maybe<Scalars['String']>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']>;
  /** Tmdb id */
  tmdb_id?: Maybe<Scalars['String']>;
  /** Score of TVMedia */
  tvm_score?: Maybe<Scalars['Int']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
  /** Year */
  year?: Maybe<Scalars['String']>;
};


/** Season episode entry. */
export type EpisodeDirectorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


/** Season episode entry. */
export type EpisodeGenresArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** Season episode entry. */
export type EpisodePersonsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


/** Season episode entry. */
export type EpisodeReviewArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Season episode entry. */
export type EpisodeSummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
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
  url?: Maybe<Scalars['String']>;
};

export type Faq = {
  __typename?: 'Faq';
  /** Answer */
  answer?: Maybe<Scalars['String']>;
  /** Question */
  question?: Maybe<Scalars['String']>;
};


export type FaqAnswerArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type FaqQuestionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

/** Gallery  */
export type Gallery = {
  __typename?: 'Gallery';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Description for internal purpose. */
  instructions?: Maybe<Scalars['String']>;
  /** Gallery items */
  items?: Maybe<Array<Maybe<GalleryItem>>>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

/** Gallery asset */
export type GalleryElementAsset = {
  __typename?: 'GalleryElementAsset';
  asset?: Maybe<Asset>;
  image_mode?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** Gallery asset */
export type GalleryElementAssetAssetArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type GalleryElementSocialMediaEmbed = {
  __typename?: 'GalleryElementSocialMediaEmbed';
  /** The unique identifier to embed the element */
  id?: Maybe<Scalars['String']>;
  /** Type of social embed */
  network?: Maybe<Scalars['String']>;
};

export type GalleryItem = GalleryElementAsset | GalleryElementSocialMediaEmbed;

export type Genre = {
  __typename?: 'Genre';
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Id of the Genre */
  id: Scalars['ID'];
  /** Mediapress  id */
  mediapress_id?: Maybe<Scalars['String']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Movies for the person */
  movies?: Maybe<Array<Maybe<Movie>>>;
  /** Shows for the person */
  shows?: Maybe<Array<Maybe<Show>>>;
  /** Slug */
  slug?: Maybe<Scalars['String']>;
  /** Sorting */
  sort?: Maybe<Scalars['Int']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Tmdb id */
  tmdb_id?: Maybe<Scalars['String']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type GenreMoviesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type GenreShowsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
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
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  path_origin?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
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
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
};

export type Health = {
  __typename?: 'Health';
  checkId?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type HeroSlide = HeroSlideEntity | HeroSlideServices;

export type HeroSlideEntity = {
  __typename?: 'HeroSlideEntity';
  /** Button text */
  button_text?: Maybe<Scalars['String']>;
  /** Entity entry */
  entity?: Maybe<TvmEntity>;
  /** Text */
  text?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};


export type HeroSlideEntityTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type HeroSlideServices = {
  __typename?: 'HeroSlideServices';
  /** Button link */
  button_link?: Maybe<Scalars['String']>;
  /** Button text */
  button_text?: Maybe<Scalars['String']>;
  /** Services ids */
  services?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Text */
  text?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};


export type HeroSlideServicesTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export enum HeroType {
  LandingPage = 'landing_page',
  Slider = 'slider'
}

export type Horoskop = {
  __typename?: 'Horoskop';
  date?: Maybe<Scalars['Date']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  zodiac?: Maybe<HoroskopZodiac>;
};

export type HoroskopBirthday = {
  __typename?: 'HoroskopBirthday';
  headline1?: Maybe<Scalars['String']>;
  headline2?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  text1?: Maybe<Scalars['String']>;
  text2?: Maybe<Scalars['String']>;
  zodiac?: Maybe<HoroskopZodiac>;
};

export type HoroskopZodiac = {
  __typename?: 'HoroskopZodiac';
  from?: Maybe<Scalars['Date']>;
  horoskop?: Maybe<Horoskop>;
  horoskop_birthday?: Maybe<HoroskopBirthday>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  until?: Maybe<Scalars['Date']>;
};


export type HoroskopZodiacHoroskopArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type HoroskopZodiacHoroskop_BirthdayArgs = {
  birthday: Scalars['Date'];
  date?: InputMaybe<Scalars['Date']>;
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
  caption?: Maybe<Scalars['String']>;
  /** Copyright */
  copyright?: Maybe<Scalars['String']>;
  /** Height */
  height?: Maybe<Scalars['Int']>;
  /** Path to asset */
  path?: Maybe<Scalars['String']>;
  /** Width */
  width?: Maybe<Scalars['Int']>;
};


/** Image asset */
export type ImageCaptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type InputChannel = {
  active?: InputMaybe<Scalars['Boolean']>;
  article_id?: InputMaybe<Scalars['String']>;
  custom_open_graph_description?: InputMaybe<Scalars['String']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']>;
  custom_twitter_description?: InputMaybe<Scalars['String']>;
  custom_twitter_title?: InputMaybe<Scalars['String']>;
  google_news_title?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  mediapress_id?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  no_follow?: InputMaybe<Scalars['Boolean']>;
  no_index?: InputMaybe<Scalars['Boolean']>;
  open_graph_description?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  redirect?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  twitter_description?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type InputCinema = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type InputEpisode = {
  actor_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  article_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  asset_id?: InputMaybe<Scalars['String']>;
  crew_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  custom_open_graph_description?: InputMaybe<Scalars['String']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']>;
  custom_twitter_description?: InputMaybe<Scalars['String']>;
  custom_twitter_title?: InputMaybe<Scalars['String']>;
  director_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enriched?: InputMaybe<Scalars['Boolean']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  google_news_title?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  imdb_id?: InputMaybe<Scalars['String']>;
  justwatch_id?: InputMaybe<Scalars['String']>;
  mediapress_id?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  no_follow?: InputMaybe<Scalars['Boolean']>;
  no_index?: InputMaybe<Scalars['Boolean']>;
  open_graph_description?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  redirect?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  reviewed?: InputMaybe<Scalars['Boolean']>;
  showtimes_id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tmdb_id?: InputMaybe<Scalars['String']>;
  tmdb_score?: InputMaybe<Scalars['Float']>;
  tvm_score?: InputMaybe<Scalars['Int']>;
  twitter_description?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type InputGenre = {
  custom_open_graph_description?: InputMaybe<Scalars['String']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']>;
  custom_twitter_description?: InputMaybe<Scalars['String']>;
  custom_twitter_title?: InputMaybe<Scalars['String']>;
  google_news_title?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mediapress_id?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  no_follow?: InputMaybe<Scalars['Boolean']>;
  no_index?: InputMaybe<Scalars['Boolean']>;
  open_graph_description?: InputMaybe<Scalars['String']>;
  redirect?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  tmdb_id?: InputMaybe<Scalars['String']>;
  twitter_description?: InputMaybe<Scalars['String']>;
};

export type InputMovie = {
  actor_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  article_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  asset_backdrop_id?: InputMaybe<Scalars['String']>;
  asset_id?: InputMaybe<Scalars['String']>;
  crew_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  custom_open_graph_description?: InputMaybe<Scalars['String']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']>;
  custom_twitter_description?: InputMaybe<Scalars['String']>;
  custom_twitter_title?: InputMaybe<Scalars['String']>;
  director_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enriched?: InputMaybe<Scalars['Boolean']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  google_news_title?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  imdb_id?: InputMaybe<Scalars['String']>;
  justwatch_id?: InputMaybe<Scalars['String']>;
  mediapress_id?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  no_follow?: InputMaybe<Scalars['Boolean']>;
  no_index?: InputMaybe<Scalars['Boolean']>;
  open_graph_description?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  redirect?: InputMaybe<Scalars['String']>;
  release_date?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  reviewed?: InputMaybe<Scalars['Boolean']>;
  showtimes_id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_lg?: InputMaybe<Scalars['String']>;
  text_md?: InputMaybe<Scalars['String']>;
  text_sm?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tmdb_id?: InputMaybe<Scalars['String']>;
  tmdb_score?: InputMaybe<Scalars['Float']>;
  tvm_score?: InputMaybe<Scalars['Int']>;
  twitter_description?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type InputPerson = {
  article_id?: InputMaybe<Scalars['String']>;
  article_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  asset_backdrop_id?: InputMaybe<Scalars['String']>;
  asset_id?: InputMaybe<Scalars['String']>;
  birth_place?: InputMaybe<Scalars['String']>;
  born_at?: InputMaybe<Scalars['Date']>;
  custom_open_graph_description?: InputMaybe<Scalars['String']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']>;
  custom_twitter_description?: InputMaybe<Scalars['String']>;
  custom_twitter_title?: InputMaybe<Scalars['String']>;
  died_at?: InputMaybe<Scalars['Date']>;
  enriched?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<Scalars['String']>;
  google_news_title?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  imdb_id?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  movie_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  no_follow?: InputMaybe<Scalars['Boolean']>;
  no_index?: InputMaybe<Scalars['Boolean']>;
  open_graph_description?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  quotes_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  redirect?: InputMaybe<Scalars['String']>;
  reviewed?: InputMaybe<Scalars['Boolean']>;
  show_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_lg?: InputMaybe<Scalars['String']>;
  text_md?: InputMaybe<Scalars['String']>;
  text_sm?: InputMaybe<Scalars['String']>;
  tmdb_id?: InputMaybe<Scalars['String']>;
  tmdb_score?: InputMaybe<Scalars['Float']>;
  twitter_description?: InputMaybe<Scalars['String']>;
};

export type InputPersonable = {
  entries?: InputMaybe<Array<InputMaybe<InputPersonableEntries>>>;
  person_id?: InputMaybe<Scalars['String']>;
  personable_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type InputPersonableEntries = {
  position?: InputMaybe<Scalars['String']>;
  rolename?: InputMaybe<Scalars['String']>;
};

export type InputProvider = {
  article_id?: InputMaybe<Scalars['String']>;
  asset_id?: InputMaybe<Scalars['String']>;
  custom_open_graph_description?: InputMaybe<Scalars['String']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']>;
  custom_twitter_description?: InputMaybe<Scalars['String']>;
  custom_twitter_title?: InputMaybe<Scalars['String']>;
  google_news_title?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  no_follow?: InputMaybe<Scalars['Boolean']>;
  no_index?: InputMaybe<Scalars['Boolean']>;
  open_graph_description?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  redirect?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  twitter_description?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type InputQuote = {
  person_id?: InputMaybe<Scalars['String']>;
  quote_id?: InputMaybe<Scalars['String']>;
};

export type InputShow = {
  actor_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  article_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  asset_backdrop_id?: InputMaybe<Scalars['String']>;
  asset_id?: InputMaybe<Scalars['String']>;
  crew_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  custom_open_graph_description?: InputMaybe<Scalars['String']>;
  custom_open_graph_title?: InputMaybe<Scalars['String']>;
  custom_twitter_description?: InputMaybe<Scalars['String']>;
  custom_twitter_title?: InputMaybe<Scalars['String']>;
  director_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enriched?: InputMaybe<Scalars['Boolean']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  google_news_title?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  imdb_id?: InputMaybe<Scalars['String']>;
  justwatch_id?: InputMaybe<Scalars['String']>;
  mediapress_id?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  no_follow?: InputMaybe<Scalars['Boolean']>;
  no_index?: InputMaybe<Scalars['Boolean']>;
  open_graph_description?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  redirect?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
  reviewed?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_lg?: InputMaybe<Scalars['String']>;
  text_md?: InputMaybe<Scalars['String']>;
  text_sm?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tmdb_id?: InputMaybe<Scalars['String']>;
  tmdb_score?: InputMaybe<Scalars['Float']>;
  tvm_score?: InputMaybe<Scalars['Int']>;
  twitter_description?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
  youtube?: InputMaybe<Scalars['String']>;
};

export type InterviewPart = {
  __typename?: 'InterviewPart';
  person?: Maybe<Person>;
  text?: Maybe<Scalars['String']>;
};


export type InterviewPartTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type JwtToken = {
  __typename?: 'JWTToken';
  refresh_token?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Should the element be opened in a seperat window/tab? */
  target_blank?: Maybe<Scalars['Boolean']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Url */
  url?: Maybe<Scalars['String']>;
};

export type LinkCollection = {
  __typename?: 'LinkCollection';
  /** ID */
  id: Scalars['ID'];
  /** Links */
  links?: Maybe<Array<Maybe<Link>>>;
  /** Title */
  title?: Maybe<Scalars['String']>;
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
  cover_image?: Maybe<Scalars['String']>;
  /** Id for magazine */
  id: Scalars['ID'];
  /** Url for further redirects */
  path?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};

export type Meta = SeoInterface & {
  __typename?: 'Meta';
  /** Custom open graph description */
  custom_open_graph_description?: Maybe<Scalars['String']>;
  /** Open graph title */
  custom_open_graph_title?: Maybe<Scalars['String']>;
  /** Twitter custom description */
  custom_twitter_description?: Maybe<Scalars['String']>;
  /** Custom twitter title */
  custom_twitter_title?: Maybe<Scalars['String']>;
  /** Google news title */
  google_news_title?: Maybe<Scalars['String']>;
  /** Meta meta_description */
  meta_description?: Maybe<Scalars['String']>;
  /** Meta title */
  meta_title?: Maybe<Scalars['String']>;
  /** No follow */
  no_follow?: Maybe<Scalars['Boolean']>;
  /** Should that entry be index */
  no_index?: Maybe<Scalars['Boolean']>;
  /** Open graph description */
  open_graph_description?: Maybe<Scalars['String']>;
  /** Open Graph Image */
  open_graph_image?: Maybe<Scalars['String']>;
  /** Redirect url */
  redirect?: Maybe<Scalars['String']>;
  /** Twitter description mode */
  twitter_description?: Maybe<Scalars['String']>;
  /** Twitter Image */
  twitter_image?: Maybe<Scalars['String']>;
};


export type MetaRedirectArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type MoonCalendarDay = {
  __typename?: 'MoonCalendarDay';
  ascendent?: Maybe<HoroskopZodiac>;
  bad_bodycare?: Maybe<Scalars['Boolean']>;
  bad_cleaning?: Maybe<Scalars['Boolean']>;
  bad_cleaning_windows?: Maybe<Scalars['Boolean']>;
  bad_cuthair?: Maybe<Scalars['Boolean']>;
  bad_facecare?: Maybe<Scalars['Boolean']>;
  bad_laundry?: Maybe<Scalars['Boolean']>;
  bad_love?: Maybe<Scalars['Boolean']>;
  bad_nails?: Maybe<Scalars['Boolean']>;
  bad_party?: Maybe<Scalars['Boolean']>;
  bad_planting?: Maybe<Scalars['Boolean']>;
  bad_traveling?: Maybe<Scalars['Boolean']>;
  bad_waterplants?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  good_bodycare?: Maybe<Scalars['Boolean']>;
  good_cleaning?: Maybe<Scalars['Boolean']>;
  good_cleaning_windows?: Maybe<Scalars['Boolean']>;
  good_cuthair?: Maybe<Scalars['Boolean']>;
  good_facecare?: Maybe<Scalars['Boolean']>;
  good_laundry?: Maybe<Scalars['Boolean']>;
  good_love?: Maybe<Scalars['Boolean']>;
  good_nails?: Maybe<Scalars['Boolean']>;
  good_party?: Maybe<Scalars['Boolean']>;
  good_planting?: Maybe<Scalars['Boolean']>;
  good_traveling?: Maybe<Scalars['Boolean']>;
  good_waterplants?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  moonphase?: Maybe<Scalars['Float']>;
  moonphase_type?: Maybe<Scalars['String']>;
  moonrise?: Maybe<Scalars['String']>;
  moonset?: Maybe<Scalars['String']>;
  sunrise?: Maybe<Scalars['String']>;
  sunset?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
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
  actor_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Age rating */
  age_rating?: Maybe<Scalars['String']>;
  /** Article ids */
  article_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Asset id backdrop image */
  asset_backdrop_id?: Maybe<Scalars['String']>;
  /** Asset id cover image */
  asset_id?: Maybe<Scalars['String']>;
  /** Assets for the movie */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Backdrop image */
  backdrop_image?: Maybe<Asset>;
  /** Cinemas */
  cinemas?: Maybe<CinemaPaginator>;
  /** cover image */
  cover_image?: Maybe<Asset>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']>;
  crew_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** flat list of director ids for the movie */
  director_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** directors for the movie */
  directors?: Maybe<PersonPaginationList>;
  /** Enriched data  */
  enriched?: Maybe<Scalars['Boolean']>;
  /** Genre ids for the movie */
  genre_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Genres for the movie */
  genres?: Maybe<Array<Maybe<Genre>>>;
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Imdb id */
  imdb_id?: Maybe<Scalars['String']>;
  /** Id within the justwatch api */
  justwatch_id?: Maybe<Scalars['String']>;
  /** Watch links */
  links?: Maybe<Array<Maybe<WatchLink>>>;
  /** Mediapress content id */
  mediapress_id?: Maybe<Scalars['String']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Original id is set if the the entry has been transformed */
  original_id?: Maybe<Scalars['String']>;
  /** Original Title of the enitity */
  original_title?: Maybe<Scalars['String']>;
  /** flat list of person ids for the movie */
  person_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** persons for the movie */
  persons?: Maybe<PersonPaginationList>;
  /** Provider */
  provider?: Maybe<Array<Maybe<Provider>>>;
  /** Pubslihed */
  published?: Maybe<Scalars['Boolean']>;
  /** Release Date */
  release_date?: Maybe<Scalars['String']>;
  /** Review */
  review?: Maybe<Scalars['String']>;
  /** Reviewed data  */
  reviewed?: Maybe<Scalars['Boolean']>;
  /** Run time in minutes */
  runtime?: Maybe<Scalars['Int']>;
  /** Shorttitle of the enitity */
  short?: Maybe<Scalars['String']>;
  /** cinema showtimes */
  showtimes?: Maybe<CinemaShowtimePaginator>;
  showtimesAmount?: Maybe<Scalars['Int']>;
  /** Showtimes for today */
  showtimesToday?: Maybe<CinemaShowtimePaginator>;
  /** Showtimes today but only upcoming */
  showtimesUpcoming?: Maybe<CinemaShowtimePaginator>;
  /** Showtimes identifier */
  showtimes_id?: Maybe<Scalars['String']>;
  /** Pivot information will only be attached if the querys root is a person. */
  singlePersonMetaInformation?: Maybe<PersonMeta>;
  /** Url-Slug */
  slug?: Maybe<Scalars['String']>;
  /** Summary */
  summary?: Maybe<Scalars['String']>;
  /** Tags for the show */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Summary Long */
  text_lg?: Maybe<Scalars['String']>;
  /** Summary Medium */
  text_md?: Maybe<Scalars['String']>;
  /** Summary Small */
  text_sm?: Maybe<Scalars['String']>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']>;
  /** Tmdb id */
  tmdb_id?: Maybe<Scalars['String']>;
  /** Score */
  tmdb_score?: Maybe<Scalars['Float']>;
  /** Trailer for the movie */
  trailer?: Maybe<Array<Maybe<Trailer>>>;
  /** Tv showtimes */
  tvShowtimes?: Maybe<CinemaShowtimePaginator>;
  /** Tv for today */
  tvShowtimesToday?: Maybe<CinemaShowtimePaginator>;
  /** Tv today but only upcoming */
  tvShowtimesUpcoming?: Maybe<CinemaShowtimePaginator>;
  /** Score of TVMedia */
  tvm_score?: Maybe<Scalars['Int']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
  /** Year of release */
  year?: Maybe<Scalars['Int']>;
  /** Youtube id */
  youtube?: Maybe<Scalars['String']>;
};


/** Movie entry. */
export type MovieCinemasArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


/** Movie entry. */
export type MovieDirectorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


/** Movie entry. */
export type MovieGenresArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** Movie entry. */
export type MoviePersonsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


/** Movie entry. */
export type MovieReviewArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Movie entry. */
export type MovieShowtimesArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<DateRange>;
};


/** Movie entry. */
export type MovieShowtimesTodayArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


/** Movie entry. */
export type MovieShowtimesUpcomingArgs = {
  cinema?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['DateTime']>;
  page?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  until?: InputMaybe<Scalars['DateTime']>;
};


/** Movie entry. */
export type MovieSummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Movie entry. */
export type MovieText_LgArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Movie entry. */
export type MovieText_MdArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Movie entry. */
export type MovieText_SmArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Movie entry. */
export type MovieTvShowtimesArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<DateRange>;
};


/** Movie entry. */
export type MovieTvShowtimesTodayArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


/** Movie entry. */
export type MovieTvShowtimesUpcomingArgs = {
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['DateTime']>;
  page?: InputMaybe<Scalars['Int']>;
  until?: InputMaybe<Scalars['DateTime']>;
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
  checkValidProduct?: Maybe<Scalars['Boolean']>;
  createTT500Company?: Maybe<Tt500Company>;
  createTT500Person?: Maybe<Tt500Person>;
  customerChangePassword?: Maybe<Scalars['Boolean']>;
  customerCheckEmailExists?: Maybe<Scalars['Boolean']>;
  customerLogin?: Maybe<JwtToken>;
  customerLogout?: Maybe<Scalars['Boolean']>;
  customerRegister?: Maybe<CustomerRegistrationResult>;
  customerRegisterFromCustomer?: Maybe<CustomerRegistrationResult>;
  customerSetPassword?: Maybe<Scalars['Boolean']>;
  deleteQuote?: Maybe<Scalars['Boolean']>;
  deleteTT500Company?: Maybe<Scalars['Boolean']>;
  deleteTT500Person?: Maybe<Scalars['Boolean']>;
  exportMovies?: Maybe<ExportInformation>;
  exportPersons?: Maybe<ExportInformation>;
  exportShows?: Maybe<ExportInformation>;
  ping?: Maybe<Scalars['String']>;
  pingAuthenticated?: Maybe<Scalars['String']>;
  resolveHtml?: Maybe<Scalars['String']>;
  /** Will trigger the resync for a movie */
  resyncMovie?: Maybe<Scalars['Boolean']>;
  /** Will trigger the resync for a person */
  resyncPerson?: Maybe<Scalars['Boolean']>;
  /** Will trigger the resync for a show */
  resyncShow?: Maybe<Scalars['Boolean']>;
  subscribeToNewsletter?: Maybe<NewsletterSubcriptionResult>;
  updateChannel?: Maybe<TvChannel>;
  updateCinema?: Maybe<Cinema>;
  updateEpisode?: Maybe<Episode>;
  updateGenre?: Maybe<Genre>;
  updateMooncalendar?: Maybe<MoonCalendarDay>;
  updateMovie?: Maybe<Movie>;
  updatePerson?: Maybe<Person>;
  updatePersonables?: Maybe<Scalars['Boolean']>;
  updateProvider?: Maybe<Provider>;
  updateQuote?: Maybe<Scalars['String']>;
  updateShow?: Maybe<Show>;
  updateTT500Company?: Maybe<Tt500Company>;
  updateTT500Person?: Maybe<Tt500Person>;
  /** Upload a file that is publicly available. */
  uploadAsset?: Maybe<Asset>;
};


export type MutationAddReportToTt500CompanyArgs = {
  company?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Tt500CompanyReport>;
};


export type MutationArticleCreateArgs = {
  data?: InputMaybe<CreateArticle>;
};


export type MutationCheckValidProductArgs = {
  product?: InputMaybe<Scalars['String']>;
};


export type MutationCreateTt500CompanyArgs = {
  data?: InputMaybe<Tt500CreateCompany>;
};


export type MutationCreateTt500PersonArgs = {
  data?: InputMaybe<Tt500CreatePerson>;
};


export type MutationCustomerChangePasswordArgs = {
  newPassword: Scalars['String'];
  newPasswordConfirm: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationCustomerCheckEmailExistsArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationCustomerLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCustomerRegisterArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  gdpr: Scalars['Boolean'];
  lastName: Scalars['String'];
  marketing: Scalars['Boolean'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  salutation: CustomerSalutation;
  sms: Scalars['Boolean'];
  terms: Scalars['Boolean'];
};


export type MutationCustomerRegisterFromCustomerArgs = {
  customerId: Scalars['String'];
  email: Scalars['String'];
  gdpr: Scalars['Boolean'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  postalCode: Scalars['String'];
  terms: Scalars['Boolean'];
};


export type MutationCustomerSetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationDeleteQuoteArgs = {
  data?: InputMaybe<InputQuote>;
};


export type MutationDeleteTt500CompanyArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteTt500PersonArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationPingArgs = {
  value?: InputMaybe<Scalars['String']>;
};


export type MutationPingAuthenticatedArgs = {
  value?: InputMaybe<Scalars['String']>;
};


export type MutationResolveHtmlArgs = {
  html?: InputMaybe<Scalars['String']>;
};


export type MutationResyncMovieArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationResyncPersonArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationResyncShowArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationSubscribeToNewsletterArgs = {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  newsletter?: InputMaybe<Scalars['ID']>;
  salutation?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
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
  file?: InputMaybe<Scalars['Upload']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Navigation list for a portal. */
export type Navigation = {
  __typename?: 'Navigation';
  /** Handle. */
  handle?: Maybe<Scalars['String']>;
  /** Unique primary key. */
  id?: Maybe<Scalars['String']>;
  /** Items */
  items?: Maybe<Array<Maybe<NavigationItem>>>;
  /** Title. */
  title?: Maybe<Scalars['String']>;
};

/** Navigation list item for a navigation. */
export type NavigationItem = {
  __typename?: 'NavigationItem';
  /** Children. */
  children?: Maybe<Array<Maybe<NavigationItem>>>;
  /** Unique primary key. */
  id?: Maybe<Scalars['String']>;
  /** Is it a title element without a clickable text? */
  only_title?: Maybe<Scalars['Boolean']>;
  /** Additional parameter */
  parameter?: Maybe<Scalars['String']>;
  /** Slug. */
  slug?: Maybe<Scalars['String']>;
  /** Title. */
  title?: Maybe<Scalars['String']>;
  /** Type of navigation item. */
  type?: Maybe<Scalars['String']>;
  /** Url. */
  url?: Maybe<Scalars['String']>;
};

export type Newsletter = {
  __typename?: 'Newsletter';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  /** The slug is required to fetch the newsletter */
  slug?: Maybe<Scalars['String']>;
  /** Title for the newsletter - will be shown on the content element */
  title?: Maybe<Scalars['String']>;
};


export type NewsletterDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type NewsletterSubcriptionResult = {
  __typename?: 'NewsletterSubcriptionResult';
  redirect_url?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
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
  category_key?: Maybe<Scalars['String']>;
  /** Category id */
  id?: Maybe<Scalars['String']>;
  /** Page key */
  page_key?: Maybe<Scalars['String']>;
  /** Profile key */
  profile_key?: Maybe<Scalars['String']>;
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

export type Page = {
  __typename?: 'Page';
  /** Ad settings for the page */
  ad_settings?: Maybe<AdSetting>;
  /** Content */
  content?: Maybe<Array<Maybe<PageContentElement>>>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Disable ads for the article */
  disable_ads?: Maybe<Scalars['Boolean']>;
  /** Id */
  id?: Maybe<Scalars['ID']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** More teaser is used for boxes */
  more_teaser?: Maybe<Scalars['String']>;
  more_teaser_headline?: Maybe<Scalars['String']>;
  /** More teaser image should be used in an overview box */
  more_teaser_image?: Maybe<Asset>;
  /** Oewa data */
  oewa?: Maybe<Oewa>;
  /** Outbrain compliant */
  outbrain_compliant?: Maybe<Scalars['Boolean']>;
  /** Outbrain deactivated */
  outbrain_disabled?: Maybe<Scalars['Boolean']>;
  /** Url of the page */
  path?: Maybe<Scalars['String']>;
  /** Is the entry published  */
  published?: Maybe<Scalars['Boolean']>;
  /** Show title */
  show_title?: Maybe<Scalars['Boolean']>;
  /** Slug of the page */
  slug?: Maybe<Scalars['String']>;
  /** Full slug of the page */
  slug_full?: Maybe<Scalars['String']>;
  /** Title of the page */
  title?: Maybe<Scalars['String']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
};


export type PageMore_TeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type PageMore_Teaser_ImageArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type PageSlugArgs = {
  simple?: InputMaybe<Scalars['Boolean']>;
};

export type PageContentElement = PageContentElementAll | PageContentElementArticles | PageContentElementArticlesApa | PageContentElementArticlesIds | PageContentElementArticlesRessort | PageContentElementBoxes | PageContentElementEntityAd | PageContentElementEntitySearchPage | PageContentElementHero | PageContentElementHeroImages | PageContentElementHorizontalPanels | PageContentElementListicles | PageContentElementNewsletterBoxes | PageContentElementSpecial | PageContentElementStage | PageContentElementSubscriptionAd | PageContentElementTeams;

export type PageContentElementAll = {
  __typename?: 'PageContentElementAll';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentElement>>>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
};

export type PageContentElementArticles = {
  __typename?: 'PageContentElementArticles';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']>;
  /** Mode */
  mode?: Maybe<Scalars['String']>;
  /** Show images */
  show_images?: Maybe<Scalars['Boolean']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
};

export type PageContentElementArticlesApa = {
  __typename?: 'PageContentElementArticlesApa';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']>;
  /** Mode */
  mode?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
};

export type PageContentElementArticlesIds = {
  __typename?: 'PageContentElementArticlesIds';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']>;
  /** Mode */
  mode?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
};

export type PageContentElementArticlesRessort = {
  __typename?: 'PageContentElementArticlesRessort';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']>;
  /** Mode */
  mode?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
};

export type PageContentElementBoxes = {
  __typename?: 'PageContentElementBoxes';
  entries?: Maybe<Array<Entry>>;
};

export type PageContentElementEntityAd = {
  __typename?: 'PageContentElementEntityAd';
  /** Link url */
  cta_link?: Maybe<Scalars['String']>;
  /** Link text */
  cta_text?: Maybe<Scalars['String']>;
  /** Asset for this entry */
  custom_asset?: Maybe<Asset>;
  /** Entity entry */
  entity?: Maybe<TvmEntity>;
  /** Entity id */
  entity_id?: Maybe<Scalars['String']>;
  /** Title or headline */
  headline?: Maybe<Scalars['String']>;
  /** Is this entry an ad */
  mark_as_ad?: Maybe<Scalars['Boolean']>;
  /** Provider */
  provider_id?: Maybe<Scalars['String']>;
  /** Text */
  text?: Maybe<Scalars['String']>;
  /** Type */
  type?: Maybe<Scalars['String']>;
  /** Use a connection to provider */
  use_provider?: Maybe<Scalars['Boolean']>;
};


export type PageContentElementEntityAdCustom_AssetArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type PageContentElementEntityAdTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type PageContentElementEntitySearchPage = {
  __typename?: 'PageContentElementEntitySearchPage';
  type?: Maybe<Scalars['String']>;
};

export type PageContentElementHero = {
  __typename?: 'PageContentElementHero';
  /** Slides of hero element */
  hero_slides?: Maybe<Array<Maybe<HeroSlide>>>;
  /** Type of hero element */
  hero_type?: Maybe<HeroType>;
  /** Text */
  text?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};


export type PageContentElementHeroTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type PageContentElementHeroImages = {
  __typename?: 'PageContentElementHeroImages';
  /** Title or headline */
  headline?: Maybe<Scalars['String']>;
  /** Images */
  images?: Maybe<Array<Maybe<Asset>>>;
  /** Text */
  text?: Maybe<Scalars['String']>;
};


export type PageContentElementHeroImagesTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type PageContentElementHorizonalPanel = {
  __typename?: 'PageContentElementHorizonalPanel';
  headline?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  subheadline?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PageContentElementHorizontalPanels = {
  __typename?: 'PageContentElementHorizontalPanels';
  description?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  panels?: Maybe<Array<Maybe<PageContentElementHorizonalPanel>>>;
};


export type PageContentElementHorizontalPanelsDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type PageContentElementListicles = {
  __typename?: 'PageContentElementListicles';
  /** List of genre ids */
  genre_filter?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of genre ids which should be excluded */
  genre_filter_excluded?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Ids of items */
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit of entries */
  limit?: Maybe<Scalars['String']>;
  /** Listicle type */
  listicle_type?: Maybe<ListicleType>;
  /** Only live events should be used. If listicle type is channel and the query is setting this option has an effect. */
  onlyLive?: Maybe<Scalars['Boolean']>;
  /** Only event that are now should be used. If listicle type is channel and the query is setting this option has an effect. */
  onlyNow?: Maybe<Scalars['Boolean']>;
  /**
   * Only primetime tv entries should be loaded. If listicle type is channel and
   * the query is setting this option has an effect.
   */
  onlyPrimetime?: Maybe<Scalars['Boolean']>;
  /** Only sports tv entries should be loaded. If listicle type is channel and the query is setting this option has an effect. */
  onlySport?: Maybe<Scalars['Boolean']>;
  /** Only entries with asset */
  onlyWithAssets?: Maybe<Scalars['Boolean']>;
  /** GraphQL query mode. */
  query?: Maybe<Scalars['String']>;
  /** Search term */
  searchterm?: Maybe<Scalars['String']>;
  /** Sort by new */
  sortByNew?: Maybe<Scalars['Boolean']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
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
  marquee_text?: Maybe<Scalars['String']>;
  /** Sheets */
  sheets?: Maybe<Array<Maybe<Sheet>>>;
  /** Type */
  special_type?: Maybe<SpecialType>;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']>;
  /** Text */
  text?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
};


export type PageContentElementSpecialBg_ImageArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type PageContentElementSpecialMarquee_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type PageContentElementSpecialTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
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
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
};

export type PageContentElementTeams = {
  __typename?: 'PageContentElementTeams';
  /** Display mode for the list */
  mode?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<Team>>>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
};

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

export type PaidContent = {
  __typename?: 'PaidContent';
  free_from?: Maybe<Scalars['Date']>;
  free_until?: Maybe<Scalars['Date']>;
  is_paid_content?: Maybe<Scalars['Boolean']>;
  paid_content_types?: Maybe<Array<Maybe<PaidContentType>>>;
};

export type PaidContentType = {
  __typename?: 'PaidContentType';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type Paywall = {
  __typename?: 'Paywall';
  /** Meta text */
  meta?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<PaywallProduct>>>;
  /** Text */
  text?: Maybe<Scalars['String']>;
  /** Title for paywall */
  title?: Maybe<Scalars['String']>;
};

export type PaywallProduct = {
  __typename?: 'PaywallProduct';
  /** Defines if the product is marked as best choice for customers */
  best_choice?: Maybe<Scalars['Boolean']>;
  /** Paywall product entry */
  product?: Maybe<SubscriptionAd>;
};

export type PaywallProductMapping = {
  __typename?: 'PaywallProductMapping';
  article_type?: Maybe<Scalars['ID']>;
  article_type_slug?: Maybe<Scalars['String']>;
  article_type_title?: Maybe<Scalars['String']>;
  /** Product ids from the compax system */
  products?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Person information */
export type Person = {
  __typename?: 'Person';
  /** Main Article id */
  article_id?: Maybe<Scalars['String']>;
  /** Article ids */
  article_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Articles */
  articles?: Maybe<Array<Maybe<ArticleShort>>>;
  /** Id for the profile picture */
  asset_id?: Maybe<Scalars['String']>;
  /** Assets for the person */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Birthplace */
  birth_place?: Maybe<Scalars['String']>;
  /** Birthday */
  born_at?: Maybe<Scalars['DateTime']>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Deathday */
  died_at?: Maybe<Scalars['DateTime']>;
  /** Edudation information */
  education?: Maybe<Scalars['String']>;
  /** Enriched */
  enriched?: Maybe<Scalars['Boolean']>;
  /** Episode for the person */
  episodes?: Maybe<Array<Maybe<Episode>>>;
  /** Familiy information */
  family?: Maybe<Scalars['String']>;
  /** Gender */
  gender?: Maybe<Scalars['String']>;
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Profile image */
  image?: Maybe<Asset>;
  /** Job */
  job?: Maybe<Scalars['String']>;
  /** Pivot information */
  meta?: Maybe<PersonMeta>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Movie ids */
  movie_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Movies for the person */
  movies?: Maybe<MoviePaginationList>;
  /** Interviewed person or part of the interview. */
  name?: Maybe<Scalars['String']>;
  /** Original id is set if the the entry has been transformed */
  original_id?: Maybe<Scalars['String']>;
  /** Published */
  published?: Maybe<Scalars['Boolean']>;
  /** Quote ids */
  quote_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Quotes */
  quotes?: Maybe<Array<Maybe<Quote>>>;
  /** Data reviewed */
  reviewed?: Maybe<Scalars['Boolean']>;
  /** Show ids */
  show_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Shows for the person */
  shows?: Maybe<ShowPaginationList>;
  /** Slug */
  slug?: Maybe<Scalars['String']>;
  /** Biography */
  summary?: Maybe<Scalars['String']>;
  /** Tags for the person */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Summary Long */
  text_lg?: Maybe<Scalars['String']>;
  /** Summary Medium */
  text_md?: Maybe<Scalars['String']>;
  /** Summary Small */
  text_sm?: Maybe<Scalars['String']>;
  /** Tmdb id */
  tmdb_id?: Maybe<Scalars['String']>;
  /** Score */
  tmdb_score?: Maybe<Scalars['Float']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
};


/** Person information */
export type PersonArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


/** Person information */
export type PersonDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Person information */
export type PersonEducationArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Person information */
export type PersonEpisodesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


/** Person information */
export type PersonFamilyArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Person information */
export type PersonMoviesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


/** Person information */
export type PersonQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


/** Person information */
export type PersonShowsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type PersonMeta = {
  __typename?: 'PersonMeta';
  /** Positions will only be attached in the correct relation */
  positions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Rolenames will only be attached in the correct relation */
  rolenames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type PersonMetaPositionsArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
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
  person_id: Scalars['ID'];
  /** Entity model */
  personable_id: Scalars['ID'];
  /** Position */
  position?: Maybe<Scalars['String']>;
  /** Rolename */
  rolename?: Maybe<Scalars['String']>;
};

export type PersonablePaginationList = {
  __typename?: 'PersonablePaginationList';
  data?: Maybe<Array<Maybe<Personable>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type PersonablePosition = {
  __typename?: 'PersonablePosition';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PersonsPaginationList = {
  __typename?: 'PersonsPaginationList';
  data?: Maybe<Array<Maybe<Person>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Provider = {
  __typename?: 'Provider';
  /** Article id */
  article_id?: Maybe<Scalars['String']>;
  /** Id for the profile picture */
  asset_id?: Maybe<Scalars['String']>;
  /** Unique Id */
  id: Scalars['ID'];
  /** Provider image */
  image?: Maybe<Asset>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Movies */
  movies?: Maybe<Array<Maybe<Movie>>>;
  /** Name of the provider */
  name?: Maybe<Scalars['String']>;
  /** Phone number */
  phone?: Maybe<Scalars['String']>;
  /** Published entry */
  published?: Maybe<Scalars['Boolean']>;
  /** Review */
  review?: Maybe<Scalars['String']>;
  /** Shows */
  shows?: Maybe<Array<Maybe<Show>>>;
  /** Slug */
  slug?: Maybe<Scalars['String']>;
  /** Sort */
  sort?: Maybe<Scalars['Int']>;
  /** Type within the service entity */
  type?: Maybe<Scalars['String']>;
  /** Url */
  url?: Maybe<Scalars['String']>;
};


export type ProviderReviewArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
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
  resolveUrl?: Maybe<Scalars['String']>;
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
  debug?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryArticlesArgs = {
  author?: InputMaybe<Scalars['String']>;
  dateType?: InputMaybe<DateType>;
  from?: InputMaybe<Scalars['Date']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  max?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  portal?: InputMaybe<Scalars['String']>;
  ressort?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Date']>;
};


export type QueryArticlesMeiliArgs = {
  author?: InputMaybe<Scalars['String']>;
  dateType?: InputMaybe<DateType>;
  from?: InputMaybe<Scalars['Date']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  max?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  portal?: InputMaybe<Scalars['String']>;
  ressort?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Date']>;
};


export type QueryArticlesNewArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  portal?: InputMaybe<Scalars['String']>;
};


export type QueryArticlesPaginatedArgs = {
  author?: InputMaybe<Scalars['String']>;
  dateType?: InputMaybe<DateType>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['Date']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  portal: Scalars['String'];
  ressort?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Date']>;
  topic?: InputMaybe<Scalars['String']>;
};


export type QueryAssetArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryAssetsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryChannelListArgs = {
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryChannelShowtimeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryChannelShowtimeByEventIdArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryChannelShowtimeListArgs = {
  channelIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['DateTime']>;
  onlyLive?: InputMaybe<Scalars['Boolean']>;
  onlyNow?: InputMaybe<Scalars['Boolean']>;
  onlySport?: InputMaybe<Scalars['Boolean']>;
  until?: InputMaybe<Scalars['DateTime']>;
};


export type QueryChannelShowtimeNowArgs = {
  channelId?: InputMaybe<Scalars['String']>;
  primetime?: InputMaybe<Scalars['Boolean']>;
};


export type QueryChannelShowtimesArgs = {
  channelId?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['DateTime']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  until?: InputMaybe<Scalars['DateTime']>;
};


export type QueryChannelShowtimesListArgs = {
  channelId?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['DateTime']>;
  until?: InputMaybe<Scalars['DateTime']>;
};


export type QueryChannelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  onlyPublished?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryCinemaArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCinemasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
};


export type QueryCitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  state_code?: InputMaybe<Scalars['String']>;
};


export type QueryCityArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCollageArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCollagenArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  portal?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['String']>;
  random?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCollectionBySlugArgs = {
  random?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryCurrentCinemaPosterArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryEntitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  person?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryEntityArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryEpisodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryEpisodesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryExternalLinkArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryExternalLinksArgs = {
  max?: InputMaybe<Scalars['Int']>;
};


export type QueryFindBySlugArgs = {
  portal?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGalleriesArgs = {
  max?: InputMaybe<Scalars['Int']>;
};


export type QueryGalleryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGenreArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGenresArgs = {
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ids_exclude?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slugs_exclude?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  where?: InputMaybe<QueryGenresWhereWhereConditions>;
};


export type QueryGlobalsArgs = {
  portal?: InputMaybe<Scalars['String']>;
};


export type QueryHoroskopArgs = {
  date?: InputMaybe<Scalars['Date']>;
  zodiac?: InputMaybe<Scalars['String']>;
};


export type QueryHoroskopsArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type QueryLinkCollectionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryLinkCollectionsArgs = {
  max?: InputMaybe<Scalars['Int']>;
};


export type QueryMagazine_SpecialsArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryMooncalendarArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMooncalendarDayArgs = {
  date?: InputMaybe<Scalars['Date']>;
};


export type QueryMooncalendarDaysArgs = {
  filter?: InputMaybe<Array<InputMaybe<MooncalendarOptions>>>;
  start: Scalars['Date'];
  stop: Scalars['Date'];
};


export type QueryMooncalendarItemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMovieArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryMoviesArgs = {
  excludeUnpublished?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryMoviesInCinemaArgs = {
  cinema?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  movieIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  until?: InputMaybe<Scalars['DateTime']>;
};


export type QueryMoviesListArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMoviesNewArgs = {
  first?: InputMaybe<Scalars['Int']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryMoviesNewestInCinemaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMoviesPopularityArgs = {
  first?: InputMaybe<Scalars['Int']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryMoviesTvArgs = {
  first?: InputMaybe<Scalars['Int']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryMyZodiacArgs = {
  birthday?: InputMaybe<Scalars['Date']>;
};


export type QueryNavigationArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryNavigationByHandleArgs = {
  handle?: InputMaybe<Scalars['String']>;
};


export type QueryNavigationByHandlesArgs = {
  handles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavigationsArgs = {
  handle?: InputMaybe<Scalars['String']>;
};


export type QueryNewsletterArgs = {
  id?: InputMaybe<Scalars['String']>;
  portal?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryNowArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryPagesArgs = {
  max?: InputMaybe<Scalars['Int']>;
  portal?: InputMaybe<Scalars['String']>;
};


export type QueryPaywallArgs = {
  portal?: InputMaybe<Scalars['String']>;
};


export type QueryPaywallProductsArgs = {
  portal?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type QueryPersonArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryPersonablesArgs = {
  entity?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  person?: InputMaybe<Scalars['String']>;
};


export type QueryPersonsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  onlyWithArticle?: InputMaybe<Scalars['Boolean']>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryPersonsListArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPreviewArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type QueryProviderArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryProvidersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  onlyPublished?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryProvidersListArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryQuoteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryQuotesArgs = {
  max?: InputMaybe<Scalars['Int']>;
};


export type QueryRedirectsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  portal?: InputMaybe<Scalars['String']>;
};


export type QueryResolveUrlArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryRessortArgs = {
  id?: InputMaybe<Scalars['ID']>;
  portal?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryRessortsArgs = {
  childIndicator?: InputMaybe<Scalars['String']>;
  portal?: InputMaybe<Scalars['String']>;
};


export type QuerySeasonArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryServicesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryStaticTextsArgs = {
  portal?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionAdArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionAdsArgs = {
  max?: InputMaybe<Scalars['Int']>;
};


export type QuerySubscriptionPageArgs = {
  id?: InputMaybe<Scalars['String']>;
  portal?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionPagesArgs = {
  max?: InputMaybe<Scalars['Int']>;
};


export type QuerySubscriptionShopArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionShopBySlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionShopsArgs = {
  max?: InputMaybe<Scalars['Int']>;
};


export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTopicArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTopic_ClustersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  portal?: InputMaybe<Scalars['String']>;
};


export type QueryTopicsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  portal?: InputMaybe<Scalars['String']>;
};


export type QueryTrailerArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTrailersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryTt500AssetArgs = {
  id: Scalars['String'];
};


export type QueryTt500AssetsArgs = {
  first?: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTt500CompaniesArgs = {
  external_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  industries?: InputMaybe<Array<Scalars['String']>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Tt500CompanyType>;
};


export type QueryTt500CompanyArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTt500FinanceReportArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTt500FinanceReportsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  industries?: InputMaybe<Array<Scalars['String']>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Tt500CompanyType>;
  year?: InputMaybe<Scalars['Int']>;
};


export type QueryTt500FinanceReportsBanksArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Tt500CompanyType>;
  year?: InputMaybe<Scalars['Int']>;
};


export type QueryTt500FinanceReportsBiggestIncreaseEmployeesArgs = {
  onlyPublished?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<Scalars['String']>;
};


export type QueryTt500FinanceReportsInsurancesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyPublished?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Tt500CompanyType>;
  year?: InputMaybe<Scalars['Int']>;
};


export type QueryTt500FinanceReportsTopNewArgs = {
  onlyPublished?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};


export type QueryTt500IndustriesArgs = {
  first?: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryTt500IndustryArgs = {
  id: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTt500PersonArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTt500PersonsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<Scalars['String']>;
};


export type QueryTvshowArgs = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryTvshowsArgs = {
  excludeUnpublished?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlyWithAsset?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryTvshowsListArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTvshowsNewArgs = {
  first?: InputMaybe<Scalars['Int']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryTvshowsPopularityArgs = {
  first?: InputMaybe<Scalars['Int']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  genresExcluded?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryTvshowsTvArgs = {
  first?: InputMaybe<Scalars['Int']>;
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
  portal?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
};


export type QueryWatchlinksArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
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
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `genres`. */
export type QueryGenresWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGenresWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type Quote = {
  __typename?: 'Quote';
  /** Unique primary key. */
  id?: Maybe<Scalars['String']>;
  /** Person */
  person?: Maybe<Person>;
  /** Source */
  source?: Maybe<Scalars['String']>;
  /** Quote text */
  text?: Maybe<Scalars['String']>;
  /** TVMedia Actor DB */
  tvmedia_person?: Maybe<Scalars['String']>;
};

export type Redirect = {
  __typename?: 'Redirect';
  /** Id */
  id?: Maybe<Scalars['ID']>;
  /** Redirect from url */
  redirect_from?: Maybe<Scalars['String']>;
  /** Redirect to url */
  redirect_target?: Maybe<Scalars['String']>;
  /** Redirect mode */
  redirect_type?: Maybe<Scalars['Int']>;
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
  description?: Maybe<Scalars['String']>;
  /** Disable ads for the ressort */
  disable_ads?: Maybe<Scalars['Boolean']>;
  /** ID */
  id?: Maybe<Scalars['ID']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** More teaser is used for boxes */
  more_teaser?: Maybe<Scalars['String']>;
  more_teaser_headline?: Maybe<Scalars['String']>;
  /** More teaser image should be used in an overview box */
  more_teaser_image?: Maybe<Asset>;
  /** Oewa data */
  oewa?: Maybe<Oewa>;
  /** Outbrain compliant */
  outbrain_compliant?: Maybe<Scalars['Boolean']>;
  /** Outbrain deactivated */
  outbrain_disabled?: Maybe<Scalars['Boolean']>;
  /** Paid content settings */
  paid_content?: Maybe<PaidContent>;
  /** Parent ressort */
  parent?: Maybe<Ressort>;
  /** Slug */
  slug?: Maybe<Scalars['String']>;
  social_media?: Maybe<Array<Maybe<CollageSocialMedia>>>;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']>;
  /** Teams */
  teams?: Maybe<Array<Maybe<Team>>>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Single users that has been added to this ressort */
  users?: Maybe<Array<Maybe<User>>>;
};


export type RessortArticlesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type RessortDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type RessortMore_TeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type RessortMore_Teaser_ImageArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Review = {
  __typename?: 'Review';
  /** Entity id */
  entity_id?: Maybe<Scalars['String']>;
  /** Review text */
  text?: Maybe<Scalars['String']>;
};


export type ReviewTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
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
  created_at?: Maybe<Scalars['DateTime']>;
  /** Episodes */
  episodes?: Maybe<EpisodePaginator>;
  /** Unique primary key. */
  id?: Maybe<Scalars['String']>;
  /** Season number */
  nr?: Maybe<Scalars['Int']>;
  /** Original Title of the enitity */
  original_title?: Maybe<Scalars['String']>;
  /** Show */
  show?: Maybe<Show>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
};


/** Show season entry. */
export type SeasonEpisodesArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
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
  custom_open_graph_description?: Maybe<Scalars['String']>;
  /** Open graph title */
  custom_open_graph_title?: Maybe<Scalars['String']>;
  /** Twitter custom description */
  custom_twitter_description?: Maybe<Scalars['String']>;
  /** Custom twitter title */
  custom_twitter_title?: Maybe<Scalars['String']>;
  /** Google news title */
  google_news_title?: Maybe<Scalars['String']>;
  /** Meta meta_description */
  meta_description?: Maybe<Scalars['String']>;
  /** Meta title */
  meta_title?: Maybe<Scalars['String']>;
  /** No follow */
  no_follow?: Maybe<Scalars['Boolean']>;
  /** Should that entry be index */
  no_index?: Maybe<Scalars['Boolean']>;
  /** Open graph description */
  open_graph_description?: Maybe<Scalars['String']>;
  /** Open Graph Image */
  open_graph_image?: Maybe<Scalars['String']>;
  /** Redirect url */
  redirect?: Maybe<Scalars['String']>;
  /** Twitter description mode */
  twitter_description?: Maybe<Scalars['String']>;
  /** Twitter Image */
  twitter_image?: Maybe<Scalars['String']>;
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
  sheet_text?: Maybe<Scalars['String']>;
  /** Title */
  sheet_title?: Maybe<Scalars['String']>;
};


export type SheetSheet_ImageArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SheetSheet_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

/** Show entry. */
export type Show = EntityInterface & {
  __typename?: 'Show';
  actor_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Article ids */
  article_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Asset id backdrop image */
  asset_backdrop_id?: Maybe<Scalars['String']>;
  /** Asset id cover image */
  asset_id?: Maybe<Scalars['String']>;
  /** Assets for the movie */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Backdrop image */
  backdrop_image?: Maybe<Asset>;
  /** cover image */
  cover_image?: Maybe<Asset>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']>;
  crew_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Id of the director */
  director_id?: Maybe<Scalars['String']>;
  /** flat list of director ids for the show */
  director_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** directors for the movie */
  directors?: Maybe<PersonPaginationList>;
  /** Enriched data  */
  enriched?: Maybe<Scalars['Boolean']>;
  /** Episodes */
  episodes?: Maybe<Array<Maybe<Episode>>>;
  /** Genre ids for the show */
  genre_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Genres for the show */
  genres?: Maybe<Array<Maybe<Genre>>>;
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Imdb id */
  imdb_id?: Maybe<Scalars['String']>;
  /** Id within the justwatch api */
  justwatch_id?: Maybe<Scalars['String']>;
  /** Watch links */
  links?: Maybe<Array<Maybe<WatchLink>>>;
  /** Mediapress content id */
  mediapress_id?: Maybe<Scalars['String']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Original id is set if the the entry has been transformed */
  original_id?: Maybe<Scalars['String']>;
  /** persons for the show */
  persons?: Maybe<PersonPaginationList>;
  /** Provider */
  provider?: Maybe<Array<Maybe<Provider>>>;
  /** Pubslihed */
  published?: Maybe<Scalars['Boolean']>;
  /** Review */
  review?: Maybe<Scalars['String']>;
  /** Reviewed data  */
  reviewed?: Maybe<Scalars['Boolean']>;
  /** Run time in minutes */
  runtime?: Maybe<Scalars['Int']>;
  /** Seasons */
  seasons?: Maybe<SeasonPaginator>;
  /** Shorttitle of the enitity */
  short?: Maybe<Scalars['String']>;
  /** Showtimes identifier */
  showtimes_id?: Maybe<Scalars['String']>;
  /** Pivot information will only be attached if the querys root is a person. */
  singlePersonMetaInformation?: Maybe<PersonMeta>;
  /** Url-Slug */
  slug?: Maybe<Scalars['String']>;
  /** Summary */
  summary?: Maybe<Scalars['String']>;
  /** Tags for the show */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Summary Long */
  text_lg?: Maybe<Scalars['String']>;
  /** Summary Medium */
  text_md?: Maybe<Scalars['String']>;
  /** Summary Small */
  text_sm?: Maybe<Scalars['String']>;
  /** Title of the enitity */
  title?: Maybe<Scalars['String']>;
  /** Tmdb id */
  tmdb_id?: Maybe<Scalars['String']>;
  /** Score */
  tmdb_score?: Maybe<Scalars['Float']>;
  /** Score of TVMedia */
  tvm_score?: Maybe<Scalars['Int']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
  /** Year of release */
  year?: Maybe<Scalars['Int']>;
  /** Youtube id */
  youtube?: Maybe<Scalars['String']>;
};


/** Show entry. */
export type ShowDirectorsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


/** Show entry. */
export type ShowGenresArgs = {
  flat?: InputMaybe<Scalars['Boolean']>;
};


/** Show entry. */
export type ShowPersonsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


/** Show entry. */
export type ShowReviewArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Show entry. */
export type ShowSeasonsArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


/** Show entry. */
export type ShowSummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Show entry. */
export type ShowText_LgArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Show entry. */
export type ShowText_MdArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


/** Show entry. */
export type ShowText_SmArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
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
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
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
  big_ad?: Maybe<Scalars['Boolean']>;
  hide_mobile?: Maybe<Scalars['Boolean']>;
  /** Mode */
  mode?: Maybe<Scalars['String']>;
  /** Show images */
  show_images?: Maybe<Scalars['Boolean']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
};

export type StageElementArticlesApa = {
  __typename?: 'StageElementArticlesApa';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']>;
  hide_mobile?: Maybe<Scalars['Boolean']>;
  /** Mode */
  mode?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
};

export type StageElementArticlesIds = {
  __typename?: 'StageElementArticlesIds';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']>;
  hide_mobile?: Maybe<Scalars['Boolean']>;
  /** Mode */
  mode?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
};

export type StageElementArticlesRessorts = {
  __typename?: 'StageElementArticlesRessorts';
  /** Articles */
  articles?: Maybe<Array<Maybe<Article>>>;
  /** Big ad */
  big_ad?: Maybe<Scalars['Boolean']>;
  hide_mobile?: Maybe<Scalars['Boolean']>;
  /** Mode */
  mode?: Maybe<Scalars['String']>;
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Title link */
  title_link?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
};

export type StageElementNewsletter = {
  __typename?: 'StageElementNewsletter';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  hide_mobile?: Maybe<Scalars['Boolean']>;
  /** Distribution list id provided by mailion */
  newsletter?: Maybe<Newsletter>;
  /** Teaser for the download. */
  teaser?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
};


export type StageElementNewsletterTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type StageElementSubscriptionShop = {
  __typename?: 'StageElementSubscriptionShop';
  /** Anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** Headline. */
  headline?: Maybe<Scalars['String']>;
  /** Headline size */
  headline_level?: Maybe<Scalars['Int']>;
  hide_mobile?: Maybe<Scalars['Boolean']>;
  /** Subscription ad */
  subscription_ad?: Maybe<SubscriptionAd>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
};

export type StaticText = {
  __typename?: 'StaticText';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  value_plural?: Maybe<Scalars['String']>;
};

export type SubscriptionAd = {
  __typename?: 'SubscriptionAd';
  /** Image asset */
  asset?: Maybe<Asset>;
  /** Button text */
  button_text?: Maybe<Scalars['String']>;
  /** Id */
  id: Scalars['ID'];
  /** Link */
  link?: Maybe<Scalars['String']>;
  /** Product code */
  paywall_code?: Maybe<Scalars['String']>;
  /** Pricy currency */
  paywall_currency?: Maybe<Scalars['String']>;
  /** Paywall features */
  paywall_features?: Maybe<Array<Maybe<SubscriptionShopProductFeature>>>;
  /** Marketing code */
  paywall_marketing_code?: Maybe<Scalars['String']>;
  /** Price */
  paywall_price?: Maybe<Scalars['String']>;
  /** Price interval */
  paywall_price_interval?: Maybe<Scalars['String']>;
  /** Paywall title */
  paywall_title?: Maybe<Scalars['String']>;
  /** UTM */
  paywall_utm?: Maybe<Scalars['String']>;
  /** Teaser */
  teaser?: Maybe<Scalars['String']>;
  /** Title. */
  title?: Maybe<Scalars['String']>;
};


export type SubscriptionAdTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type SubscriptionPage = {
  __typename?: 'SubscriptionPage';
  banner_text?: Maybe<Scalars['String']>;
  boxes?: Maybe<Array<SubscriptionPageBox>>;
  boxes_more?: Maybe<Scalars['String']>;
  cta?: Maybe<Scalars['String']>;
  cta_link?: Maybe<Scalars['String']>;
  feedback?: Maybe<Array<SubscriptionPageFeeback>>;
  feedback_headline?: Maybe<Scalars['String']>;
  /** Id */
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<Meta>;
  portal?: Maybe<Scalars['String']>;
  /** Price in euro */
  price?: Maybe<Scalars['String']>;
  price_extra?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  top_disclaimer?: Maybe<Scalars['String']>;
  top_headline?: Maybe<Scalars['String']>;
  top_image?: Maybe<Asset>;
};

export type SubscriptionPageBox = {
  __typename?: 'SubscriptionPageBox';
  headline?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  text?: Maybe<Scalars['String']>;
};


export type SubscriptionPageBoxTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type SubscriptionPageFeeback = {
  __typename?: 'SubscriptionPageFeeback';
  image?: Maybe<Asset>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  stars?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};


export type SubscriptionPageFeebackTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
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
  headline?: Maybe<Scalars['String']>;
  /** Unique id */
  id?: Maybe<Scalars['String']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** More button links */
  more_button_link?: Maybe<Scalars['String']>;
  /** More button text */
  more_button_text?: Maybe<Scalars['String']>;
  /** More headline h1 */
  more_headline_1?: Maybe<Scalars['String']>;
  /** More headline h2 */
  more_headline_2?: Maybe<Scalars['String']>;
  /** More image for the size desktop. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  more_image_desktop?: Maybe<Asset>;
  /** More image for the size mobile. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  more_image_mobile?: Maybe<Asset>;
  /** More image for the size tablet. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  more_image_tablet?: Maybe<Asset>;
  /** Teaser text for the more section */
  more_teaser?: Maybe<Scalars['String']>;
  /** Text for the more section */
  more_text?: Maybe<Scalars['String']>;
  /** Product 1 marketing code with binding */
  product_box_1_code_with_binding?: Maybe<Scalars['String']>;
  /** Product 1 marketing code without binding */
  product_box_1_code_without_binding?: Maybe<Scalars['String']>;
  /** Product 1 features */
  product_box_1_features?: Maybe<Array<Maybe<SubscriptionShopProductFeature>>>;
  /** Product 1 headline */
  product_box_1_headline?: Maybe<Scalars['String']>;
  /** Product 1 image for the size desktop. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_1_image_desktop?: Maybe<Asset>;
  /** Product 1 image for the size mobile. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_1_image_mobile?: Maybe<Asset>;
  /** Product 1 image for the size tablet. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_1_image_tablet?: Maybe<Asset>;
  /** Product 1 offer with binding */
  product_box_1_offer_with_binding?: Maybe<Scalars['String']>;
  /** Product 1 offer without binding */
  product_box_1_offer_without_binding?: Maybe<Scalars['String']>;
  /** Product 1 Read more button */
  product_box_1_read_more_button?: Maybe<Scalars['String']>;
  /** Product 1 tagline */
  product_box_1_tagline?: Maybe<Scalars['String']>;
  /** Product 1 text */
  product_box_1_text?: Maybe<Scalars['String']>;
  /** Product 2 marketing code with binding */
  product_box_2_code_with_binding?: Maybe<Scalars['String']>;
  /** Product 2 marketing code without binding */
  product_box_2_code_without_binding?: Maybe<Scalars['String']>;
  /** Product 2 features */
  product_box_2_features?: Maybe<Array<Maybe<SubscriptionShopProductFeature>>>;
  /** Product 2 headline */
  product_box_2_headline?: Maybe<Scalars['String']>;
  /** Product 2 image for the size desktop. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_2_image_desktop?: Maybe<Asset>;
  /** Product 2 image for the size mobile. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_2_image_mobile?: Maybe<Asset>;
  /** Product 2 image for the size tablet. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_2_image_tablet?: Maybe<Asset>;
  /** Product 2 offer with binding */
  product_box_2_offer_with_binding?: Maybe<Scalars['String']>;
  /** Product 2 offer without binding */
  product_box_2_offer_without_binding?: Maybe<Scalars['String']>;
  /** Product 2 Read more button */
  product_box_2_read_more_button?: Maybe<Scalars['String']>;
  /** Product 2 tagline */
  product_box_2_tagline?: Maybe<Scalars['String']>;
  /** Product 2 text */
  product_box_2_text?: Maybe<Scalars['String']>;
  /** Product 3 marketing code with binding */
  product_box_3_code_with_binding?: Maybe<Scalars['String']>;
  /** Product 3 marketing code without binding */
  product_box_3_code_without_binding?: Maybe<Scalars['String']>;
  /** Product 3 features */
  product_box_3_features?: Maybe<Array<Maybe<SubscriptionShopProductFeature>>>;
  /** Product 3 headline */
  product_box_3_headline?: Maybe<Scalars['String']>;
  /** Product 3 image for the size desktop. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_3_image_desktop?: Maybe<Asset>;
  /** Product 3 image for the size mobile. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_3_image_mobile?: Maybe<Asset>;
  /** Product 3 image for the size tablet. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  product_box_3_image_tablet?: Maybe<Asset>;
  /** Product 3 offer with binding */
  product_box_3_offer_with_binding?: Maybe<Scalars['String']>;
  /** Product 3 offer without binding */
  product_box_3_offer_without_binding?: Maybe<Scalars['String']>;
  /** Product 3 Read more button */
  product_box_3_read_more_button?: Maybe<Scalars['String']>;
  /** Product 3 tagline */
  product_box_3_tagline?: Maybe<Scalars['String']>;
  /** Product 3 text */
  product_box_3_text?: Maybe<Scalars['String']>;
  /** The slug to to identify a subscription shop page */
  slug?: Maybe<Scalars['String']>;
  /** Startup teaser */
  teaser?: Maybe<Scalars['String']>;
  /** Internal title */
  title?: Maybe<Scalars['String']>;
  /** Startup toogle option 1 */
  toggle_option_1?: Maybe<Scalars['String']>;
  /** Startup toogle option 2 */
  toggle_option_2?: Maybe<Scalars['String']>;
  /** Upgrade section headline */
  upgrade_intro_headline?: Maybe<Scalars['String']>;
  /** Upgrade teaser */
  upgrade_intro_text?: Maybe<Scalars['String']>;
};


export type SubscriptionShopHeader_Image_DesktopArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopHeader_Image_MobileArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopHeader_Image_TabletArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopMore_Image_DesktopArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopMore_Image_MobileArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopMore_Image_TabletArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopMore_TeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionShopMore_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionShopProduct_Box_1_Image_DesktopArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopProduct_Box_1_Image_MobileArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopProduct_Box_1_Image_TabletArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopProduct_Box_1_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionShopProduct_Box_2_Image_DesktopArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopProduct_Box_2_Image_MobileArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopProduct_Box_2_Image_TabletArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopProduct_Box_2_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionShopProduct_Box_3_Image_DesktopArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopProduct_Box_3_Image_MobileArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopProduct_Box_3_Image_TabletArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type SubscriptionShopProduct_Box_3_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionShopTeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type SubscriptionShopUpgrade_Intro_TextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type SubscriptionShopProductFeature = {
  __typename?: 'SubscriptionShopProductFeature';
  text?: Maybe<Scalars['String']>;
};

export enum Tt500AccountingType {
  Ifrs = 'IFRS',
  Ugb = 'UGB'
}

export type Tt500Asset = {
  __typename?: 'TT500Asset';
  external_path?: Maybe<Scalars['String']>;
  file?: Maybe<GlideData>;
  id: Scalars['ID'];
  origin?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type Tt500AssetFileArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
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
  id: Scalars['ID'];
};

export type Tt500Company = {
  __typename?: 'TT500Company';
  asset?: Maybe<Tt500Asset>;
  asset_id?: Maybe<Scalars['String']>;
  businesses?: Maybe<Array<Tt500Businesses>>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  external_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  industries?: Maybe<Array<Tt500CompanyIndustry>>;
  logo?: Maybe<Scalars['String']>;
  management?: Maybe<Array<Tt500PersonPosition>>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  ranking?: Maybe<Scalars['Int']>;
  reports?: Maybe<Array<Tt500FinanceReport>>;
  slug?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  type: Tt500CompanyType;
  web?: Maybe<Scalars['String']>;
};

export type Tt500CompanyIndustry = {
  __typename?: 'TT500CompanyIndustry';
  id: Scalars['ID'];
  name: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
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
  function: Scalars['String'];
  id: Scalars['ID'];
  kind: Scalars['String'];
  year: Scalars['Int'];
};

export type Tt500CompanyReport = {
  accounting_type?: InputMaybe<Tt500AccountingType>;
  annoation?: InputMaybe<Scalars['String']>;
  corecapitalratio?: InputMaybe<Scalars['Float']>;
  corecapitalratio_prev?: InputMaybe<Scalars['Float']>;
  costincomeratio?: InputMaybe<Scalars['Float']>;
  costincomeratio_prev?: InputMaybe<Scalars['Float']>;
  damage?: InputMaybe<Scalars['Float']>;
  damage_prev?: InputMaybe<Scalars['Float']>;
  earnedpremium?: InputMaybe<Scalars['Float']>;
  earnedpremium_delta?: InputMaybe<Scalars['Float']>;
  ebit?: InputMaybe<Scalars['Float']>;
  ebit_prev?: InputMaybe<Scalars['Float']>;
  employees?: InputMaybe<Scalars['Int']>;
  employees_delta?: InputMaybe<Scalars['Float']>;
  equityratio?: InputMaybe<Scalars['Float']>;
  excess?: InputMaybe<Scalars['Float']>;
  footnote?: InputMaybe<Scalars['String']>;
  health?: InputMaybe<Scalars['Float']>;
  health_prev?: InputMaybe<Scalars['Float']>;
  life?: InputMaybe<Scalars['Float']>;
  life_prev?: InputMaybe<Scalars['Float']>;
  netcombinedratio?: InputMaybe<Scalars['Float']>;
  netcombinedratio_prev?: InputMaybe<Scalars['Float']>;
  netinterestmargin?: InputMaybe<Scalars['Float']>;
  netinterestmargin_prev?: InputMaybe<Scalars['Float']>;
  netrevenue?: InputMaybe<Scalars['Float']>;
  netrevenue_delta?: InputMaybe<Scalars['Float']>;
  owner?: InputMaybe<Scalars['String']>;
  ranking?: InputMaybe<Scalars['Int']>;
  ranking_prev?: InputMaybe<Scalars['Int']>;
  return?: InputMaybe<Scalars['Float']>;
  share_commissionresult?: InputMaybe<Scalars['Float']>;
  share_commissionresult_prev?: InputMaybe<Scalars['Float']>;
  share_netinterestincome?: InputMaybe<Scalars['Float']>;
  share_netinterestincome_prev?: InputMaybe<Scalars['Float']>;
  share_tradingresult?: InputMaybe<Scalars['Float']>;
  share_tradingresult_prev?: InputMaybe<Scalars['Float']>;
  solvencyratio?: InputMaybe<Scalars['Float']>;
  solvencyratio_prev?: InputMaybe<Scalars['Float']>;
  totalassets?: InputMaybe<Scalars['Float']>;
  totalassets_delta?: InputMaybe<Scalars['Float']>;
  unitlinked?: InputMaybe<Scalars['Float']>;
  unitlinked_prev?: InputMaybe<Scalars['Float']>;
  year: Scalars['Int'];
  year_financial?: InputMaybe<Scalars['String']>;
  yield?: InputMaybe<Scalars['Float']>;
  yield_prev?: InputMaybe<Scalars['Float']>;
};

export enum Tt500CompanyType {
  Bank = 'BANK',
  Insurance = 'INSURANCE',
  Normal = 'NORMAL'
}

export type Tt500CompanyUpdateReport = {
  accounting_type?: InputMaybe<Tt500AccountingType>;
  annoation?: InputMaybe<Scalars['String']>;
  corecapitalratio?: InputMaybe<Scalars['Float']>;
  corecapitalratio_prev?: InputMaybe<Scalars['Float']>;
  costincomeratio?: InputMaybe<Scalars['Float']>;
  costincomeratio_prev?: InputMaybe<Scalars['Float']>;
  damage?: InputMaybe<Scalars['Float']>;
  damage_prev?: InputMaybe<Scalars['Float']>;
  earnedpremium?: InputMaybe<Scalars['Float']>;
  earnedpremium_delta?: InputMaybe<Scalars['Float']>;
  ebit?: InputMaybe<Scalars['Float']>;
  ebit_prev?: InputMaybe<Scalars['Float']>;
  employees?: InputMaybe<Scalars['Int']>;
  employees_delta?: InputMaybe<Scalars['Float']>;
  equityratio?: InputMaybe<Scalars['Float']>;
  excess?: InputMaybe<Scalars['Float']>;
  footnote?: InputMaybe<Scalars['String']>;
  health?: InputMaybe<Scalars['Float']>;
  health_prev?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  life?: InputMaybe<Scalars['Float']>;
  life_prev?: InputMaybe<Scalars['Float']>;
  netcombinedratio?: InputMaybe<Scalars['Float']>;
  netcombinedratio_prev?: InputMaybe<Scalars['Float']>;
  netinterestmargin?: InputMaybe<Scalars['Float']>;
  netinterestmargin_prev?: InputMaybe<Scalars['Float']>;
  netrevenue?: InputMaybe<Scalars['Float']>;
  netrevenue_delta?: InputMaybe<Scalars['Float']>;
  owner?: InputMaybe<Scalars['String']>;
  ranking?: InputMaybe<Scalars['Int']>;
  ranking_hidden?: InputMaybe<Scalars['Boolean']>;
  ranking_prev?: InputMaybe<Scalars['Int']>;
  return?: InputMaybe<Scalars['Float']>;
  share_commissionresult?: InputMaybe<Scalars['Float']>;
  share_commissionresult_prev?: InputMaybe<Scalars['Float']>;
  share_netinterestincome?: InputMaybe<Scalars['Float']>;
  share_netinterestincome_prev?: InputMaybe<Scalars['Float']>;
  share_tradingresult?: InputMaybe<Scalars['Float']>;
  share_tradingresult_prev?: InputMaybe<Scalars['Float']>;
  solvencyratio?: InputMaybe<Scalars['Float']>;
  solvencyratio_prev?: InputMaybe<Scalars['Float']>;
  totalassets?: InputMaybe<Scalars['Float']>;
  totalassets_delta?: InputMaybe<Scalars['Float']>;
  unitlinked?: InputMaybe<Scalars['Float']>;
  unitlinked_prev?: InputMaybe<Scalars['Float']>;
  year?: InputMaybe<Scalars['Int']>;
  year_financial?: InputMaybe<Scalars['Int']>;
  yield?: InputMaybe<Scalars['Float']>;
  yield_prev?: InputMaybe<Scalars['Float']>;
};

export type Tt500CreateCompany = {
  asset_id?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  management?: InputMaybe<Array<Tt500CompanyPosition>>;
  name?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  ranking?: InputMaybe<Scalars['Int']>;
  reports?: InputMaybe<Array<Tt500CompanyReport>>;
  slug?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  type: Tt500CompanyType;
  web?: InputMaybe<Scalars['String']>;
};

export type Tt500CreatePerson = {
  firstname: Scalars['String'];
  gender?: InputMaybe<Tt500PersonGender>;
  lastname: Scalars['String'];
};

export type Tt500FinanceReport = Tt500FinanceReportBank | Tt500FinanceReportDefault | Tt500FinanceReportInsurance;

export type Tt500FinanceReportBank = Tt500ResultInterface & {
  __typename?: 'TT500FinanceReportBank';
  accounting_type?: Maybe<Tt500AccountingType>;
  annoation?: Maybe<Scalars['String']>;
  company?: Maybe<Tt500Company>;
  /** TODO: Describe this field */
  corecapitalratio?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  corecapitalratio_prev?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  costincomeratio?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  costincomeratio_prev?: Maybe<Scalars['Float']>;
  employees?: Maybe<Scalars['Int']>;
  employees_delta?: Maybe<Scalars['Float']>;
  footnote?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  industry?: Maybe<Tt500CompanyIndustry>;
  /** TODO: Describe this field */
  netinterestmargin?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  netinterestmargin_prev?: Maybe<Scalars['Float']>;
  owner?: Maybe<Scalars['String']>;
  ranking?: Maybe<Scalars['Int']>;
  /** TODO: Describe this field */
  ranking_hidden?: Maybe<Scalars['Boolean']>;
  ranking_prev?: Maybe<Scalars['Int']>;
  /** TODO: Describe this field */
  returnonequity?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  returnonequity_prev?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  share_commissionresult?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  share_commissionresult_prev?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  share_netinterestincome?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  share_netinterestincome_prev?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  share_tradingresult?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  share_tradingresult_prev?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  totalassets?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  totalassets_delta?: Maybe<Scalars['Float']>;
  year: Scalars['Int'];
};

export type Tt500FinanceReportBanksPagination = {
  __typename?: 'TT500FinanceReportBanksPagination';
  data?: Maybe<Array<Tt500FinanceReportBank>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Tt500FinanceReportDefault = Tt500ResultInterface & {
  __typename?: 'TT500FinanceReportDefault';
  accounting_type?: Maybe<Tt500AccountingType>;
  annoation?: Maybe<Scalars['String']>;
  company?: Maybe<Tt500Company>;
  /** TODO: Describe this field */
  ebit?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  ebit_prev?: Maybe<Scalars['Float']>;
  employees?: Maybe<Scalars['Int']>;
  employees_delta?: Maybe<Scalars['Float']>;
  employees_increase?: Maybe<Scalars['Int']>;
  employees_prev?: Maybe<Scalars['Int']>;
  footnote?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  industry?: Maybe<Tt500CompanyIndustry>;
  /** TODO: Describe this field */
  netrevenue?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  netrevenue_delta?: Maybe<Scalars['Float']>;
  owner?: Maybe<Scalars['String']>;
  ranking?: Maybe<Scalars['Int']>;
  ranking_difference?: Maybe<Scalars['Int']>;
  /** TODO: Describe this field */
  ranking_hidden?: Maybe<Scalars['Boolean']>;
  ranking_prev?: Maybe<Scalars['Int']>;
  year: Scalars['Int'];
  /** The timeframe of the buisness year */
  year_financial?: Maybe<Scalars['String']>;
};

export type Tt500FinanceReportInsurance = Tt500ResultInterface & {
  __typename?: 'TT500FinanceReportInsurance';
  accounting_type?: Maybe<Tt500AccountingType>;
  annoation?: Maybe<Scalars['String']>;
  company?: Maybe<Tt500Company>;
  /** TODO: Describe this field */
  damage?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  damage_prev?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  earnedpremium?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  earnedpremium_delta?: Maybe<Scalars['Float']>;
  employees?: Maybe<Scalars['Int']>;
  employees_delta?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  equityratio?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  excess?: Maybe<Scalars['Float']>;
  footnote?: Maybe<Scalars['String']>;
  /** TODO: Describe this field */
  health?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  health_prev?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  industry?: Maybe<Tt500CompanyIndustry>;
  /** TODO: Describe this field */
  life?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  life_prev?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  netcombinedratio?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  netcombinedratio_prev?: Maybe<Scalars['Float']>;
  owner?: Maybe<Scalars['String']>;
  ranking?: Maybe<Scalars['Int']>;
  /** TODO: Describe this field */
  ranking_hidden?: Maybe<Scalars['Boolean']>;
  ranking_prev?: Maybe<Scalars['Int']>;
  /** TODO: Describe this field */
  return?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  solvencyratio?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  solvencyratio_prev?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  unitlinked?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  unitlinked_prev?: Maybe<Scalars['Float']>;
  year: Scalars['Int'];
  /** TODO: Describe this field */
  yield?: Maybe<Scalars['Float']>;
  /** TODO: Describe this field */
  yield_prev?: Maybe<Scalars['Float']>;
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
  id: Scalars['ID'];
  name: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
};

export type Tt500Person = {
  __typename?: 'TT500Person';
  firstname: Scalars['String'];
  gender: Tt500PersonGender;
  id: Scalars['ID'];
  lastname: Scalars['String'];
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
  firstname?: Maybe<Scalars['String']>;
  function?: Maybe<Scalars['String']>;
  gender: Tt500PersonGender;
  id: Scalars['ID'];
  kind?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  year: Scalars['Int'];
};

export type Tt500ResultInterface = {
  accounting_type?: Maybe<Tt500AccountingType>;
  annoation?: Maybe<Scalars['String']>;
  company?: Maybe<Tt500Company>;
  employees?: Maybe<Scalars['Int']>;
  employees_delta?: Maybe<Scalars['Float']>;
  footnote?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
  ranking?: Maybe<Scalars['Int']>;
  ranking_prev?: Maybe<Scalars['Int']>;
  year: Scalars['Int'];
};

export type Tt500UpdateCompany = {
  asset_id?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  management?: InputMaybe<Array<Tt500CompanyPosition>>;
  name?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  ranking?: InputMaybe<Scalars['Int']>;
  reports?: InputMaybe<Array<Tt500CompanyUpdateReport>>;
  slug?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  type: Tt500CompanyType;
  web?: InputMaybe<Scalars['String']>;
};

export type Tt500UpdatePerson = {
  firstname: Scalars['String'];
  gender?: InputMaybe<Tt500PersonGender>;
  id: Scalars['ID'];
  lastname: Scalars['String'];
};

export type TvChannel = {
  __typename?: 'TVChannel';
  /** Published */
  active?: Maybe<Scalars['Boolean']>;
  /** Article id */
  article_id?: Maybe<Scalars['String']>;
  /** Custom open graph description */
  custom_open_graph_description?: Maybe<Scalars['String']>;
  /** Open graph title */
  custom_open_graph_title?: Maybe<Scalars['String']>;
  /** Twitter custom description */
  custom_twitter_description?: Maybe<Scalars['String']>;
  /** Custom twitter title */
  custom_twitter_title?: Maybe<Scalars['String']>;
  /** ID */
  id: Scalars['ID'];
  /** Logo */
  logo?: Maybe<Asset>;
  /** Mediapress identifier */
  mediapress_id?: Maybe<Scalars['String']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Name of the channel */
  name?: Maybe<Scalars['String']>;
  /** No follow */
  no_follow?: Maybe<Scalars['Boolean']>;
  /** Should that entry be index */
  no_index?: Maybe<Scalars['Boolean']>;
  /** Open graph description */
  open_graph_description?: Maybe<Scalars['String']>;
  /** Phone number */
  phone?: Maybe<Scalars['String']>;
  /** Redirect url */
  redirect?: Maybe<Scalars['String']>;
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
  slug?: Maybe<Scalars['String']>;
  /** Sort */
  sort?: Maybe<Scalars['Int']>;
  /** Twitter description mode */
  twitter_description?: Maybe<Scalars['String']>;
  /** Type within the service entity */
  type?: Maybe<Scalars['String']>;
  /** Url */
  url?: Maybe<Scalars['String']>;
};


export type TvChannelRedirectArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type TvChannelShowtimesArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<DateRange>;
};


export type TvChannelShowtimesProgramArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type TvChannelShowtimesTodayArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type TvChannelShowtimesUpcomingArgs = {
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['DateTime']>;
  page?: InputMaybe<Scalars['Int']>;
  until?: InputMaybe<Scalars['DateTime']>;
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
  actors_summary?: Maybe<Scalars['String']>;
  /** Asset id */
  asset_id?: Maybe<Scalars['String']>;
  /** Assets for the movie */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Basecontent ID */
  basecontent_id?: Maybe<Scalars['String']>;
  /** TV Channel information */
  channel?: Maybe<TvChannel>;
  channel_id?: Maybe<Scalars['String']>;
  /** Content ID */
  content_id?: Maybe<Scalars['String']>;
  /** Production countries */
  countries?: Maybe<Scalars['String']>;
  /** Text summary of directors */
  directors_summary?: Maybe<Scalars['String']>;
  /** Entity. This can be a movie or show. */
  entity?: Maybe<Entity>;
  /** Episode number if show */
  episode?: Maybe<Scalars['Int']>;
  /** Event ID */
  event_id?: Maybe<Scalars['String']>;
  /** Single genre text */
  genre?: Maybe<Scalars['String']>;
  /** Does this entry have any kinds of subtitles */
  has_subtitles?: Maybe<Scalars['Boolean']>;
  /** ID */
  id: Scalars['ID'];
  /** Asset for the preview */
  image?: Maybe<Asset>;
  /** Is this showtime in 4K? */
  is_4k?: Maybe<Scalars['Boolean']>;
  /** Is this showtime in HD? */
  is_hd?: Maybe<Scalars['Boolean']>;
  /** Is it a live event? */
  is_live?: Maybe<Scalars['Boolean']>;
  /** Is sport related? */
  is_sport?: Maybe<Scalars['Boolean']>;
  /** Is this showtime in stereo? */
  is_stereo?: Maybe<Scalars['Boolean']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Season number if show */
  season?: Maybe<Scalars['Int']>;
  /** If it is a sport what kind of sport is it */
  sport?: Maybe<Scalars['String']>;
  /** When will this showtime start */
  start?: Maybe<Scalars['DateTime']>;
  /** Starttime as string */
  start_time?: Maybe<Scalars['String']>;
  /** When will this stowtime stop */
  stop?: Maybe<Scalars['DateTime']>;
  /** Stoptime as string */
  stop_time?: Maybe<Scalars['String']>;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']>;
  /** Summary text of the episode */
  summary?: Maybe<Scalars['String']>;
  /** Title of the show */
  title?: Maybe<Scalars['String']>;
  /** Type */
  type?: Maybe<Scalars['String']>;
  /** Year */
  year?: Maybe<Scalars['Int']>;
};


export type TvChannelShowtimeSummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
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
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type TableColumnBoolean = {
  __typename?: 'TableColumnBoolean';
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Boolean']>;
};


export type TableColumnBooleanTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type TableColumnFloat = {
  __typename?: 'TableColumnFloat';
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};


export type TableColumnFloatTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type TableColumnInteger = {
  __typename?: 'TableColumnInteger';
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};


export type TableColumnIntegerTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type TableColumnSimple = {
  __typename?: 'TableColumnSimple';
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};


export type TableColumnSimpleTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type TableRow = {
  __typename?: 'TableRow';
  /** Columns */
  columns?: Maybe<Array<Maybe<TableColumn>>>;
};

export type Team = {
  __typename?: 'Team';
  /** Team description */
  description?: Maybe<Scalars['String']>;
  /** Id of team */
  id: Scalars['ID'];
  /** Portal */
  portal?: Maybe<Scalars['String']>;
  /** Slug of the team */
  slug?: Maybe<Scalars['String']>;
  /** Team member */
  team?: Maybe<Array<Maybe<TeamMember>>>;
  /** Team name */
  title?: Maybe<Scalars['String']>;
};


export type TeamDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  /** Position */
  position?: Maybe<Scalars['String']>;
  /** User information */
  user?: Maybe<User>;
};

export type Text = {
  __typename?: 'Text';
  headline?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


export type TextTextArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type Topic = {
  __typename?: 'Topic';
  /** Ad settings for the page */
  ad_settings?: Maybe<AdSetting>;
  /** Advertorial entry */
  advertorial?: Maybe<Scalars['Boolean']>;
  /** Advertorial text */
  advertorial_text?: Maybe<Scalars['String']>;
  /** Related articles */
  articles?: Maybe<ArticlePaginatorSimple>;
  /** Content elements */
  content?: Maybe<Array<Maybe<ContentElement>>>;
  /** Created at */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Disable ads */
  disable_ads?: Maybe<Scalars['Boolean']>;
  /** Content elements for the footer */
  footer_content?: Maybe<Array<Maybe<ContentElement>>>;
  /** Id of the topic */
  id?: Maybe<Scalars['ID']>;
  image_mode?: Maybe<Scalars['String']>;
  /** Images for the topic */
  images?: Maybe<Array<Maybe<TopicImage>>>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** More teaser is used for boxes */
  more_teaser?: Maybe<Scalars['String']>;
  more_teaser_headline?: Maybe<Scalars['String']>;
  /** More teaser image should be used in an overview box */
  more_teaser_image?: Maybe<Asset>;
  /** Oewa data */
  oewa?: Maybe<Oewa>;
  /** Is the entry published  */
  published?: Maybe<Scalars['Boolean']>;
  /** Slug for the topic. Can be used to query the entry */
  slug?: Maybe<Scalars['String']>;
  /** Subhealdine for the topic */
  subtitle?: Maybe<Scalars['String']>;
  /** Title of the topic */
  title?: Maybe<Scalars['String']>;
  /** Updated at */
  updated_at?: Maybe<Scalars['DateTime']>;
  /** Url to the topic */
  url?: Maybe<Scalars['String']>;
};


export type TopicArticlesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type TopicMore_TeaserArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};


export type TopicMore_Teaser_ImageArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type TopicCluster = {
  __typename?: 'TopicCluster';
  id: Scalars['ID'];
  portal?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
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
  url?: Maybe<Scalars['String']>;
};


export type TopicImageImageArgs = {
  fit?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type TopicsPaginatorSimple = {
  __typename?: 'TopicsPaginatorSimple';
  data?: Maybe<Array<Maybe<Topic>>>;
  paginatorInfo?: Maybe<DefaultPaginator>;
};

export type Trailer = {
  __typename?: 'Trailer';
  /** Format for the trailer  */
  format?: Maybe<Scalars['String']>;
  /** Unique Id */
  id: Scalars['ID'];
  /** The related movie */
  movie?: Maybe<Movie>;
  /** Tmdb ID */
  tmdb_id?: Maybe<Scalars['String']>;
  /** Link to the trailer */
  url?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['String']>;
  /** Summary text */
  summary?: Maybe<Scalars['String']>;
  /** Title of the entity */
  title?: Maybe<Scalars['String']>;
  /** Type of element */
  type?: Maybe<Scalars['String']>;
  /** Year */
  year?: Maybe<Scalars['Int']>;
};


export type TvmEntitySummaryArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

export type TvmEntityAsset = {
  __typename?: 'TvmEntityAsset';
  file?: Maybe<TvmEntityAssetPath>;
};

export type TvmEntityAssetPath = {
  __typename?: 'TvmEntityAssetPath';
  path?: Maybe<Scalars['String']>;
  path_original?: Maybe<Scalars['String']>;
};

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  /** Articles from the user */
  articles?: Maybe<ArticlePaginatorSimple>;
  /** Avatar image of the user. Options for fit can be found at https://statamic.dev/tags/glide#focal-point-cropping */
  avatar?: Maybe<Asset>;
  /** When the account was created. */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Description. */
  description?: Maybe<Scalars['String']>;
  /** Unique email address. */
  email?: Maybe<Scalars['String']>;
  /** When the email was verified. */
  email_verified_at?: Maybe<Scalars['DateTime']>;
  /** Facebook Account for the user */
  facebook?: Maybe<Scalars['String']>;
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Instagram Account for the user */
  instagram?: Maybe<Scalars['String']>;
  /** LinkedIn Account for the user */
  linkedin?: Maybe<Scalars['String']>;
  /** Meta data */
  metadata?: Maybe<Meta>;
  /** Non-unique name. */
  name?: Maybe<Scalars['String']>;
  /** List of permissions */
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Team position in context */
  position?: Maybe<Scalars['String']>;
  /** Profile link */
  profile?: Maybe<Scalars['String']>;
  /** Slug */
  slug?: Maybe<Scalars['String']>;
  /** Tiktok Account for the user */
  tiktok?: Maybe<Scalars['String']>;
  /** Twitter Account for the user */
  twitter?: Maybe<Scalars['String']>;
  /** When the account was last updated. */
  updated_at?: Maybe<Scalars['DateTime']>;
  /** Website for the user */
  website?: Maybe<Scalars['String']>;
};


/** Account of a person who utilizes this application. */
export type UserArticlesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  portal?: InputMaybe<Scalars['String']>;
};


/** Account of a person who utilizes this application. */
export type UserAvatarArgs = {
  fit?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** Account of a person who utilizes this application. */
export type UserDescriptionArgs = {
  raw?: InputMaybe<Scalars['Boolean']>;
};

/** Watch links for a movie or show. */
export type WatchLink = {
  __typename?: 'WatchLink';
  /** Currency */
  currency?: Maybe<Scalars['String']>;
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Deeplink to the portal */
  link?: Maybe<Scalars['String']>;
  /** Movie */
  movie?: Maybe<Movie>;
  /** Price */
  price?: Maybe<Scalars['Float']>;
  /** Pricing model */
  pricing?: Maybe<Scalars['String']>;
  /** Provider */
  provider?: Maybe<Scalars['String']>;
  /** Provider */
  providerEntry?: Maybe<Provider>;
  /** Show */
  show?: Maybe<Show>;
  /** Tmdb ID */
  tmdb_id?: Maybe<Scalars['String']>;
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
  column?: InputMaybe<Scalars['String']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type UpdateMooncalendarInput = {
  ascendent?: InputMaybe<Scalars['String']>;
  bad_bodycare?: InputMaybe<Scalars['Boolean']>;
  bad_cleaning?: InputMaybe<Scalars['Boolean']>;
  bad_cleaning_windows?: InputMaybe<Scalars['Boolean']>;
  bad_cuthair?: InputMaybe<Scalars['Boolean']>;
  bad_facecare?: InputMaybe<Scalars['Boolean']>;
  bad_laundry?: InputMaybe<Scalars['Boolean']>;
  bad_love?: InputMaybe<Scalars['Boolean']>;
  bad_nails?: InputMaybe<Scalars['Boolean']>;
  bad_party?: InputMaybe<Scalars['Boolean']>;
  bad_planting?: InputMaybe<Scalars['Boolean']>;
  bad_traveling?: InputMaybe<Scalars['Boolean']>;
  bad_waterplants?: InputMaybe<Scalars['Boolean']>;
  good_bodycare?: InputMaybe<Scalars['Boolean']>;
  good_cleaning?: InputMaybe<Scalars['Boolean']>;
  good_cleaning_windows?: InputMaybe<Scalars['Boolean']>;
  good_cuthair?: InputMaybe<Scalars['Boolean']>;
  good_facecare?: InputMaybe<Scalars['Boolean']>;
  good_laundry?: InputMaybe<Scalars['Boolean']>;
  good_love?: InputMaybe<Scalars['Boolean']>;
  good_nails?: InputMaybe<Scalars['Boolean']>;
  good_party?: InputMaybe<Scalars['Boolean']>;
  good_planting?: InputMaybe<Scalars['Boolean']>;
  good_traveling?: InputMaybe<Scalars['Boolean']>;
  good_waterplants?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  text?: InputMaybe<Scalars['String']>;
  zodiac?: InputMaybe<Scalars['String']>;
};

export type SubscribeToNewsletterMutationVariables = Exact<{
  email: Scalars['String'];
  newsletter: Scalars['ID'];
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  salutation?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
}>;


export type SubscribeToNewsletterMutation = { __typename?: 'Mutation', subscribeToNewsletter?: { __typename?: 'NewsletterSubcriptionResult', success?: boolean | null, redirect_url?: string | null } | null };

export type AdsFragment = { __typename?: 'AdSetting', top?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, billboard?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, right1?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, right2?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, left?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, cad1?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, cad2?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, cad3?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, mobile_cad1?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, mobile_cad2?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, mobile_top?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null, mobile_bottom?: { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null } | null };

export type AdDetailsFragment = { __typename?: 'AdSettingConfig', id?: number | null, name?: string | null, breakpoints?: Array<number | null> | null, yieldLab?: Array<{ __typename?: 'AdSettingYieldlab', yieldlabAdslotVal?: number | null, yieldlabAdsCheckId?: number | null }> | null };

export const AdDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdSettingConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"yieldLab"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"yieldlabAdslotVal"}},{"kind":"Field","name":{"kind":"Name","value":"yieldlabAdsCheckId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"breakpoints"}}]}}]} as unknown as DocumentNode<AdDetailsFragment, unknown>;
export const AdsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Ads"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdSetting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"top"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"billboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"right1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"right2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"left"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cad1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cad2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cad3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobile_cad1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobile_cad2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobile_top"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobile_bottom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdSettingConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"yieldLab"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"yieldlabAdslotVal"}},{"kind":"Field","name":{"kind":"Name","value":"yieldlabAdsCheckId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"breakpoints"}}]}}]} as unknown as DocumentNode<AdsFragment, unknown>;
export const SubscribeToNewsletterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubscribeToNewsletter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newsletter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"salutation"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribeToNewsletter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"newsletter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newsletter"}}},{"kind":"Argument","name":{"kind":"Name","value":"salutation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"salutation"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"redirect_url"}}]}}]}}]} as unknown as DocumentNode<SubscribeToNewsletterMutation, SubscribeToNewsletterMutationVariables>;