import { Client } from "@elastic/elasticsearch";
import AWS from "aws-sdk";
import config from "../config";

export default class ElasticsearchService {
  constructor() {
    AWS.config.update(config.awsConfig);
    this.client = new Client({
      node: config.elasticSearchUrl,
      Connection: config.Connection,
    });
  }

  async addData(id, data) {
    console.log(`Adding ${id} to Elasticsearch`);
    await this.client.index({
      index: "podcasts",
      id,
      body: data,
    });
  }
}
