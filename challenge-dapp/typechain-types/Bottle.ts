/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BottleInterface extends utils.Interface {
  functions: {
    "getMessage()": FunctionFragment;
    "setMessage(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getMessage" | "setMessage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getMessage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMessage",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "getMessage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMessage", data: BytesLike): Result;

  events: {};
}

export interface Bottle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BottleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getMessage(overrides?: CallOverrides): Promise<[string]>;

    setMessage(
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getMessage(overrides?: CallOverrides): Promise<string>;

  setMessage(
    _message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getMessage(overrides?: CallOverrides): Promise<string>;

    setMessage(
      _message: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getMessage(overrides?: CallOverrides): Promise<BigNumber>;

    setMessage(
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMessage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMessage(
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
