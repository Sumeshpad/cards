// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice = TopSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

/**
 * Item in *Top → Default → Primary → Card*
 */
export interface TopSliceDefaultPrimaryCardItem {
  /**
   * Availability field in *Top → Default → Primary → Card*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: top.default.primary.card[].availability
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  availability: prismic.BooleanField;

  /**
   * cardheading field in *Top → Default → Primary → Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top.default.primary.card[].cardheading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cardheading: prismic.KeyTextField;

  /**
   * Number_available_games field in *Top → Default → Primary → Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top.default.primary.card[].number_available_games
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number_available_games: prismic.KeyTextField;

  /**
   * number_consoles field in *Top → Default → Primary → Card*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top.default.primary.card[].number_consoles
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  number_consoles: prismic.KeyTextField;

  /**
   * button field in *Top → Default → Primary → Card*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: top.default.primary.card[].button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField;

  /**
   * book a call field in *Top → Default → Primary → Card*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: top.default.primary.card[].book_a_call
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  book_a_call: prismic.LinkField;

  /**
   * controller_image field in *Top → Default → Primary → Card*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: top.default.primary.card[].controller_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  controller_image: prismic.ImageField<never>;
}

/**
 * Primary content in *Top → Default → Primary*
 */
export interface TopSliceDefaultPrimary {
  /**
   * Heading field in *Top → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Card field in *Top → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: top.default.primary.card[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  card: prismic.GroupField<Simplify<TopSliceDefaultPrimaryCardItem>>;
}

/**
 * Default variation for Top Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TopSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Top*
 */
type TopSliceVariation = TopSliceDefault;

/**
 * Top Shared Slice
 *
 * - **API ID**: `top`
 * - **Description**: Top
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopSlice = prismic.SharedSlice<"top", TopSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      TopSlice,
      TopSliceDefaultPrimaryCardItem,
      TopSliceDefaultPrimary,
      TopSliceVariation,
      TopSliceDefault,
    };
  }
}
