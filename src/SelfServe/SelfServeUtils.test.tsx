import { NumberUiType, RefreshResult, SelfServeBaseClass, SelfServeNotification, SmartUiInput } from "./SelfServeTypes";
import { DecoratorProperties, mapToSmartUiDescriptor, updateContextWithDecorator } from "./SelfServeUtils";

describe("SelfServeUtils", () => {
  it("initialize should be declared for self serve classes", () => {
    class Test extends SelfServeBaseClass {
      public initialize: () => Promise<Map<string, SmartUiInput>>;
      public onSave: (currentValues: Map<string, SmartUiInput>) => Promise<SelfServeNotification>;
      public onRefresh: () => Promise<RefreshResult>;
    }
    expect(() => new Test().toSelfServeDescriptor()).toThrow("initialize() was not declared for the class 'Test'");
  });

  it("onSave should be declared for self serve classes", () => {
    class Test extends SelfServeBaseClass {
      public initialize = jest.fn();
      public onSave: () => Promise<SelfServeNotification>;
      public onRefresh: () => Promise<RefreshResult>;
    }
    expect(() => new Test().toSelfServeDescriptor()).toThrow("onSave() was not declared for the class 'Test'");
  });

  it("onRefresh should be declared for self serve classes", () => {
    class Test extends SelfServeBaseClass {
      public initialize = jest.fn();
      public onSave = jest.fn();
      public onRefresh: () => Promise<RefreshResult>;
    }
    expect(() => new Test().toSelfServeDescriptor()).toThrow("onRefresh() was not declared for the class 'Test'");
  });

  it("@SmartUi decorator must be present for self serve classes", () => {
    class Test extends SelfServeBaseClass {
      public initialize = jest.fn();
      public onSave = jest.fn();
      public onRefresh = jest.fn();
    }
    expect(() => new Test().toSelfServeDescriptor()).toThrow(
      "@SmartUi decorator was not declared for the class 'Test'"
    );
  });

  it("updateContextWithDecorator", () => {
    const context = new Map<string, DecoratorProperties>();
    updateContextWithDecorator(context, "dbThroughput", "testClass", "max", 1);
    updateContextWithDecorator(context, "dbThroughput", "testClass", "min", 2);
    updateContextWithDecorator(context, "collThroughput", "testClass", "max", 5);
    expect(context.size).toEqual(2);
    expect(context.get("dbThroughput")).toEqual({ id: "dbThroughput", max: 1, min: 2 });
    expect(context.get("collThroughput")).toEqual({ id: "collThroughput", max: 5 });
  });

  it("mapToSmartUiDescriptor", () => {
    const context: Map<string, DecoratorProperties> = new Map([
      [
        "dbThroughput",
        {
          id: "dbThroughput",
          dataFieldName: "dbThroughput",
          type: "number",
          labelTKey: "Database Throughput",
          min: 1,
          max: 5,
          step: 1,
          uiType: NumberUiType.Slider,
        },
      ],
      [
        "collThroughput",
        {
          id: "collThroughput",
          dataFieldName: "collThroughput",
          type: "number",
          labelTKey: "Coll Throughput",
          min: 1,
          max: 5,
          step: 1,
          uiType: NumberUiType.Spinner,
        },
      ],
      [
        "invalidThroughput",
        {
          id: "invalidThroughput",
          dataFieldName: "invalidThroughput",
          type: "boolean",
          labelTKey: "Invalid Coll Throughput",
          min: 1,
          max: 5,
          step: 1,
          uiType: NumberUiType.Spinner,
          errorMessage: "label, truelabel and falselabel are required for boolean input",
        },
      ],
      [
        "collName",
        {
          id: "collName",
          dataFieldName: "collName",
          type: "string",
          labelTKey: "Coll Name",
          placeholderTKey: "placeholder text",
        },
      ],
      [
        "enableLogging",
        {
          id: "enableLogging",
          dataFieldName: "enableLogging",
          type: "boolean",
          labelTKey: "Enable Logging",
          trueLabelTKey: "Enable",
          falseLabelTKey: "Disable",
        },
      ],
      [
        "invalidEnableLogging",
        {
          id: "invalidEnableLogging",
          dataFieldName: "invalidEnableLogging",
          type: "boolean",
          labelTKey: "Invalid Enable Logging",
          placeholderTKey: "placeholder text",
        },
      ],
      [
        "regions",
        {
          id: "regions",
          dataFieldName: "regions",
          type: "object",
          labelTKey: "Regions",
          choices: [
            { label: "South West US", key: "SWUS" },
            { label: "North Central US", key: "NCUS" },
            { label: "East US 2", key: "EUS2" },
          ],
        },
      ],
      [
        "invalidRegions",
        {
          id: "invalidRegions",
          dataFieldName: "invalidRegions",
          type: "object",
          labelTKey: "Invalid Regions",
          placeholderTKey: "placeholder text",
        },
      ],
    ]);
    const expectedDescriptor = {
      root: {
        id: "TestClass",
        children: [
          {
            id: "dbThroughput",
            input: {
              id: "dbThroughput",
              dataFieldName: "dbThroughput",
              type: "number",
              labelTKey: "Database Throughput",
              min: 1,
              max: 5,
              step: 1,
              uiType: "Slider",
            },
            children: [] as Node[],
          },
          {
            id: "collThroughput",
            input: {
              id: "collThroughput",
              dataFieldName: "collThroughput",
              type: "number",
              labelTKey: "Coll Throughput",
              min: 1,
              max: 5,
              step: 1,
              uiType: "Spinner",
            },
            children: [] as Node[],
          },
          {
            id: "invalidThroughput",
            input: {
              id: "invalidThroughput",
              dataFieldName: "invalidThroughput",
              type: "boolean",
              labelTKey: "Invalid Coll Throughput",
              min: 1,
              max: 5,
              step: 1,
              uiType: "Spinner",
              errorMessage: "label, truelabel and falselabel are required for boolean input 'invalidThroughput'.",
            },
            children: [] as Node[],
          },
          {
            id: "collName",
            input: {
              id: "collName",
              dataFieldName: "collName",
              type: "string",
              labelTKey: "Coll Name",
              placeholderTKey: "placeholder text",
            },
            children: [] as Node[],
          },
          {
            id: "enableLogging",
            input: {
              id: "enableLogging",
              dataFieldName: "enableLogging",
              type: "boolean",
              labelTKey: "Enable Logging",
              trueLabelTKey: "Enable",
              falseLabelTKey: "Disable",
            },
            children: [] as Node[],
          },
          {
            id: "invalidEnableLogging",
            input: {
              id: "invalidEnableLogging",
              dataFieldName: "invalidEnableLogging",
              type: "boolean",
              labelTKey: "Invalid Enable Logging",
              placeholderTKey: "placeholder text",
              errorMessage: "label, truelabel and falselabel are required for boolean input 'invalidEnableLogging'.",
            },
            children: [] as Node[],
          },
          {
            id: "regions",
            input: {
              id: "regions",
              dataFieldName: "regions",
              type: "object",
              labelTKey: "Regions",
              choices: [
                { label: "South West US", key: "SWUS" },
                { label: "North Central US", key: "NCUS" },
                { label: "East US 2", key: "EUS2" },
              ],
            },
            children: [] as Node[],
          },
          {
            id: "invalidRegions",
            input: {
              id: "invalidRegions",
              dataFieldName: "invalidRegions",
              type: "object",
              labelTKey: "Invalid Regions",
              placeholderTKey: "placeholder text",
              errorMessage: "label and choices are required for Choice input 'invalidRegions'.",
            },
            children: [] as Node[],
          },
        ],
      },
      inputNames: [
        "dbThroughput",
        "collThroughput",
        "invalidThroughput",
        "collName",
        "enableLogging",
        "invalidEnableLogging",
        "regions",
        "invalidRegions",
      ],
    };
    const descriptor = mapToSmartUiDescriptor("TestClass", context);
    expect(descriptor).toEqual(expectedDescriptor);
  });
});
