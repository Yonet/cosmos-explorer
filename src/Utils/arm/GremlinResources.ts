/* 
  AUTOGENERATED FILE
  Do not manually edit
  Run "npm run generateARMClients" to regenerate
*/

import * as Types from "./types";

export class GremlinResourcesClient {
  private readonly baseUrl = "https://management.azure.com";
  private readonly basePath = `/subscriptions/${this.subscriptionId}/resourceGroups/${this.resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${this.accountName}/gremlinDatabases`;

  constructor(
    private readonly subscriptionId: string,
    private readonly resourceGroupName: string,
    private readonly accountName: string
  ) {}

  /* Lists the Gremlin databases under an existing Azure Cosmos DB database account. */
  async listGremlinDatabases(): Promise<Types.GremlinDatabaseListResult> {
    const path = ``;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "get" }).then(response => response.json());
  }

  /* Gets the Gremlin databases under an existing Azure Cosmos DB database account with the provided name. */
  async getGremlinDatabase(databaseName: string): Promise<Types.GremlinDatabaseGetResults> {
    const path = `/${databaseName}`;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "get" }).then(response => response.json());
  }

  /* Create or update an Azure Cosmos DB Gremlin database */
  async createUpdateGremlinDatabase(
    databaseName: string,
    body: Types.GremlinDatabaseCreateUpdateParameters
  ): Promise<Types.GremlinDatabaseGetResults | void> {
    const path = `/${databaseName}`;
    return window
      .fetch(this.baseUrl + this.basePath + path, { method: "put", body: JSON.stringify(body) })
      .then(response => response.json());
  }

  /* Deletes an existing Azure Cosmos DB Gremlin database. */
  async deleteGremlinDatabase(databaseName: string): Promise<void | void> {
    const path = `/${databaseName}`;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "delete" }).then(response => response.json());
  }

  /* Lists the Gremlin graph under an existing Azure Cosmos DB database account. */
  async listGremlinGraphs(databaseName: string): Promise<Types.GremlinGraphListResult> {
    const path = `/${databaseName}/graphs`;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "get" }).then(response => response.json());
  }

  /* Gets the Gremlin graph under an existing Azure Cosmos DB database account. */
  async getGremlinGraph(databaseName: string, graphName: string): Promise<Types.GremlinGraphGetResults> {
    const path = `/${databaseName}/graphs/${graphName}`;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "get" }).then(response => response.json());
  }

  /* Create or update an Azure Cosmos DB Gremlin graph */
  async createUpdateGremlinGraph(
    databaseName: string,
    graphName: string,
    body: Types.GremlinGraphCreateUpdateParameters
  ): Promise<Types.GremlinGraphGetResults | void> {
    const path = `/${databaseName}/graphs/${graphName}`;
    return window
      .fetch(this.baseUrl + this.basePath + path, { method: "put", body: JSON.stringify(body) })
      .then(response => response.json());
  }

  /* Deletes an existing Azure Cosmos DB Gremlin graph. */
  async deleteGremlinGraph(databaseName: string, graphName: string): Promise<void | void> {
    const path = `/${databaseName}/graphs/${graphName}`;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "delete" }).then(response => response.json());
  }

  /* Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the provided name. */
  async getGremlinGraphThroughput(
    databaseName: string,
    graphName: string
  ): Promise<Types.ThroughputSettingsGetResults> {
    const path = `/${databaseName}/graphs/${graphName}/throughputSettings/default`;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "get" }).then(response => response.json());
  }

  /* Update RUs per second of an Azure Cosmos DB Gremlin graph */
  async updateGremlinGraphThroughput(
    databaseName: string,
    graphName: string,
    body: Types.ThroughputSettingsUpdateParameters
  ): Promise<Types.ThroughputSettingsGetResults | void> {
    const path = `/${databaseName}/graphs/${graphName}/throughputSettings/default`;
    return window
      .fetch(this.baseUrl + this.basePath + path, { method: "put", body: JSON.stringify(body) })
      .then(response => response.json());
  }

  /* Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account with the provided name. */
  async getGremlinDatabaseThroughput(databaseName: string): Promise<Types.ThroughputSettingsGetResults> {
    const path = `/${databaseName}/throughputSettings/default`;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "get" }).then(response => response.json());
  }

  /* Update RUs per second of an Azure Cosmos DB Gremlin database */
  async updateGremlinDatabaseThroughput(
    databaseName: string,
    body: Types.ThroughputSettingsUpdateParameters
  ): Promise<Types.ThroughputSettingsGetResults | void> {
    const path = `/${databaseName}/throughputSettings/default`;
    return window
      .fetch(this.baseUrl + this.basePath + path, { method: "put", body: JSON.stringify(body) })
      .then(response => response.json());
  }
}
