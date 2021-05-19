import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "dbi6o2or",
  dataset: "production",
  apiVersion: "2021-05-18",
  useCdn: false
});
