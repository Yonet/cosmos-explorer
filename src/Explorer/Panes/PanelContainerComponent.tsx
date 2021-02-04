import * as React from "react";
import { Panel, PanelType } from "office-ui-fabric-react";

export interface PanelState {
  headerText: string;
  panelContent: JSX.Element;
}
export interface PanelContainerProps {
  panelState: PanelState;
  isOpen: boolean;
  closePanel: () => void;
  isConsoleExpanded: boolean;
}

export class PanelContainerComponent extends React.Component<PanelContainerProps> {
  private readonly consoleHeaderHeight = 32;
  private readonly consoleContentHeight = 220;

  render(): JSX.Element {
    if (!this.props.panelState) {
      return <></>;
    }

    return (
      <Panel
        headerText={this.props.panelState.headerText}
        isOpen={this.props.isOpen}
        onDismiss={this.onDissmiss}
        isLightDismiss
        type={PanelType.custom}
        closeButtonAriaLabel="Close"
        customWidth="440px"
        headerClassName="panelHeader"
        styles={{
          navigation: { borderBottom: "1px solid #cccccc" },
          content: { padding: "24px 34px 20px 34px", height: "100%" },
          scrollableContent: { height: "100%" },
        }}
        style={{ height: this.getPanelHeight() }}
      >
        {this.props.panelState.panelContent}
      </Panel>
    );
  }

  private onDissmiss = (ev?: React.SyntheticEvent<HTMLElement>): void => {
    if ((ev.target as HTMLElement).id === "notificationConsoleHeader") {
      ev.preventDefault();
    } else {
      this.props.closePanel();
    }
  };

  private getPanelHeight = (): string => {
    const consoleHeight = this.props.isConsoleExpanded
      ? this.consoleContentHeight + this.consoleHeaderHeight
      : this.consoleHeaderHeight;
    const panelHeight = window.innerHeight - consoleHeight;
    return panelHeight + "px";
  };
}
