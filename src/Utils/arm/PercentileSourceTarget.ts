/* 
  AUTOGENERATED FILE
  Do not manually edit
  Run "npm run generateARMClients" to regenerate
*/

import * as Types from "./types";

export class PercentileSourceTargetClient {
  private readonly baseUrl = "https://management.azure.com";
  private readonly basePath = `/subscriptions/${this.subscriptionId}/resourceGroups/${this.resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${this.accountName}/sourceRegion/${this.sourceRegion}/targetRegion/${this.targetRegion}/percentile/metrics`;

  constructor(
    private readonly subscriptionId: string,
    private readonly resourceGroupName: string,
    private readonly accountName: string,
    private readonly sourceRegion: string,
    private readonly targetRegion: string
  ) {}

  /* Retrieves the metrics determined by the given filter for the given account, source and target region. This url is only for PBS and Replication Latency data */
  async listMetrics(): Promise<Types.PercentileMetricListResult> {
    const path = ``;
    return window.fetch(this.baseUrl + this.basePath + path, { method: "get" }).then(response => response.json());
  }
}
