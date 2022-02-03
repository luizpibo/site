import tiny from "tiny-json-http";

export async function request({
  query,
  variables,
  preview,
}: {
  query: string;
  variables?: any;
  preview?: boolean;
}) {
    let endpoint = "https://graphql.datocms.com";

    if (process.env.NEXT_DATOCMS_ENVIRONMENT) {
        endpoint += `/environments/${process.env.NEXT_DATOCMS_ENVIRONMENT}`;
    }

    if (preview) {
        endpoint += "/preview";
    }

    const { body } = await tiny.post({
        url: endpoint,
        headers: {
            authorization: `Bearer ${process.env.NEXT_CMS_DATOCMS_API_TOKEN}`,
        },
        data: {
            query,
            variables,
        },
    });

    if(body.errors) {
        throw new Error(body.errors.map(e => e.message).join("\n"));
    }
}
