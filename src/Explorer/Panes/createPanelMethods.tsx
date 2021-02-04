import React from "react";
import Explorer from "../Explorer";
import { DeleteCollectionConfirmationPaneComponent } from "./DeleteCollectionConfirmationPaneComponent";
import { PanelState } from "./PanelContainerComponent";

export interface CreatePanelMethodsParams {
  expandNotificationConsole: () => void;
  closePanel: () => void;
}

export interface PanelMethods {
  openDeleteCollectionConfirmationPane: (explorer: Explorer) => void;
  resetContentAndClosePanel: () => void;
}

export const createPanelMethods = (params: CreatePanelMethodsParams): PanelMethods => {
  const openDeleteCollectionConfirmationPane = (explorer: Explorer): PanelState => {
    return {
      headerText: "Delete Collection",
      panelContent: (
        <DeleteCollectionConfirmationPaneComponent
          explorer={explorer}
          closePanel={params.closePanel}
          openNotificationConsole={params.expandNotificationConsole}
        />
      ),
    };
  };

  const resetContentAndClosePanel = (): PanelState => {
    return {
      headerText: "",
      panelContent: undefined,
    };
  };

  return {
    openDeleteCollectionConfirmationPane,
    resetContentAndClosePanel,
  };
};
