/**
 * This adapter is responsible to render the React component
 * If the component signals a change through the callback passed in the properties, it must render the React component when appropriate
 * and update any knockout observables passed from the parent.
 */
import * as ko from "knockout";
import * as React from "react";
import { ReactAdapter } from "../Bindings/ReactBindingHandler";
import Explorer from "../Explorer/Explorer";
import { SelfServeComponent } from "./SelfServeComponent";
import { SelfServeDescriptor } from "./SelfServeTypes";
import { SelfServeType } from "./SelfServeUtils";

export class SelfServeComponentAdapter implements ReactAdapter {
  public parameters: ko.Observable<SelfServeDescriptor>;
  public container: Explorer;

  constructor(container: Explorer) {
    this.container = container;
    this.parameters = ko.observable(undefined);
    this.container.selfServeType.subscribe(() => {
      this.triggerRender();
    });
  }

  public static getDescriptor = async (selfServeType: SelfServeType): Promise<SelfServeDescriptor> => {
    switch (selfServeType) {
      case SelfServeType.example: {
        const SelfServeExample = await import(/* webpackChunkName: "SelfServeExample" */ "./Example/SelfServeExample");
        return new SelfServeExample.default().toSelfServeDescriptor();
      }
      case SelfServeType.sqlx: {
        const SqlX = await import(/* webpackChunkName: "SqlX" */ "./SqlX/SqlX");
        return new SqlX.default().toSelfServeDescriptor();
      }
      default:
        return undefined;
    }
  };

  public renderComponent(): JSX.Element {
    if (this.container.selfServeType() === SelfServeType.invalid) {
      return <h1>Invalid self serve type!</h1>;
    }
    const smartUiDescriptor = this.parameters();
    return smartUiDescriptor ? <SelfServeComponent descriptor={smartUiDescriptor} /> : <></>;
  }

  private triggerRender() {
    window.requestAnimationFrame(async () => {
      const selfServeType = this.container.selfServeType();
      const smartUiDescriptor = await SelfServeComponentAdapter.getDescriptor(selfServeType);
      this.parameters(smartUiDescriptor);
    });
  }
}
