//*
// API to manage Jetify devcloud Sandbox environments

// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file pub/devcloud/v1alpha1/sandbox.proto (package pub.devcloud.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateSandboxRequest, CreateSandboxResponse, GetSandboxRequest, GetSandboxResponse } from "./sandbox_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service pub.devcloud.v1alpha1.SandboxService
 */
export const SandboxService = {
  typeName: "pub.devcloud.v1alpha1.SandboxService",
  methods: {
    /**
     * @generated from rpc pub.devcloud.v1alpha1.SandboxService.CreateSandbox
     */
    createSandbox: {
      name: "CreateSandbox",
      I: CreateSandboxRequest,
      O: CreateSandboxResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc pub.devcloud.v1alpha1.SandboxService.GetSandbox
     */
    getSandbox: {
      name: "GetSandbox",
      I: GetSandboxRequest,
      O: GetSandboxResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

