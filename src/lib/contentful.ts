import * as contentful from 'contentful';
import type { EntryFieldTypes } from 'contentful';

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export interface Endorsements {
  contentTypeId: 'endorsements';
  fields: {
    electionTitle: EntryFieldTypes.Text;
    electionDate: EntryFieldTypes.Date;
    pageDescription: EntryFieldTypes.Text;
    pageImage: EntryFieldTypes.AssetLink;
    body: EntryFieldTypes.RichText;
  };
}

export interface Event {
  contentTypeId: 'events';
  fields: {
    slug: EntryFieldTypes.Text;
    eventName: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    location: EntryFieldTypes.Text;
    streetAddress: EntryFieldTypes.Text;
    cityStateZip: EntryFieldTypes.Text;
    googleMapsLink: EntryFieldTypes.Text;
    details: EntryFieldTypes.RichText;
  };
}

export interface LaborClub {
  contentTypeId: 'laborClubs';
  fields: {
    name: EntryFieldTypes.Text;
    meeting: EntryFieldTypes.Text;
    meetingTime: EntryFieldTypes.Text;
    locationName: EntryFieldTypes.Text;
    streetAddress: EntryFieldTypes.Text;
    cityStateZip: EntryFieldTypes.Text;
    googleMapsLink: EntryFieldTypes.Text;
    phoneNumber: EntryFieldTypes.Text;
    presidentName: EntryFieldTypes.Text;
    presidentEmail: EntryFieldTypes.Text;
    presidentAddress: EntryFieldTypes.Text;
    vicePresidentName: EntryFieldTypes.Text;
    vicePresidentEmail: EntryFieldTypes.Text;
    vicePresidentAddress: EntryFieldTypes.Text;
    additionalPersonName: EntryFieldTypes.Text;
    additionalPersonEmail: EntryFieldTypes.Text;
    treasurerName: EntryFieldTypes.Text;
    treasurerEmail: EntryFieldTypes.Text;
    recordingSecretaryName: EntryFieldTypes.Text;
    recordingSecretaryEmail: EntryFieldTypes.Text;
    notes: EntryFieldTypes.RichText;
  };
}

export interface News {
  contentTypeId: 'news';
  fields: {
    slug: EntryFieldTypes.Text;
    postTitle: EntryFieldTypes.Text;
    postDate: EntryFieldTypes.Date;
    postImage: EntryFieldTypes.AssetLink;
    body: EntryFieldTypes.RichText;
  };
}

export interface Officers {
  contentTypeId: 'officers';
  fields: {
    title: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    local: EntryFieldTypes.Date;
    order: EntryFieldTypes.Integer;
  };
}

export interface ExecutiveBoard {
  contentTypeId: 'executiveBoard';
  fields: {
    local: EntryFieldTypes.Text;
    members: EntryFieldTypes.Text;
    order: EntryFieldTypes.Integer;
  };
}
