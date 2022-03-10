import { SanityClient } from "@sanity/client";

export const client = SanityClient({
    projectId: 'clhswkyh',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skc84NqjACaRfupAIVWwk2Ijctusfj90Dgt7m2PftAeHKRkvUE3rcGaMakc5ZWc2fhYEYBpuycvVD1NHklNeKXdCQ8MXgRaGWrn76NDP5Wk9CNzIeE1B1SkL0tS5KrFTa4jrCDVjkYgKldg46scDQo2Bmrdotrxrg9qCWIFzYBiNlWPmOs3N',
    useCdn: false,
})