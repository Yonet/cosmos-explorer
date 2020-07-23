/* 
  AUTOGENERATED FILE
  Do not manually edit
  Run "npm run generateARMClients" to regenerate
*/

import * as Types from "./types";

export class CollectionPartitionClient {
  private readonly baseUrl = "https://management.azure.com";
  private readonly basePath = `/subscriptions/${this.subscriptionId}/resourceGroups/${this.resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${this.accountName}/databases/${this.databaseRid}/collections/${this.collectionRid}/partitions/`;

  constructor(
    private readonly subscriptionId: string,
    private readonly resourceGroupName: string,
    private readonly accountName: string,
    private readonly databaseRid: string,
    private readonly collectionRid: string
  ) {}

  /* Retrieves the metrics determined by the given filter for the given collection, split by partition. */
  async listMetrics(): Promise<Types.PartitionMetricListResult> {
    const path = `metrics`;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "get" }).then(response => response.json());
  }

  /* Retrieves the usages (most recent storage data) for the given collection, split by partition. */
  async listUsages(): Promise<Types.PartitionUsagesResult> {
    const path = `usages`;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "get" }).then(response => response.json());
  }
}
