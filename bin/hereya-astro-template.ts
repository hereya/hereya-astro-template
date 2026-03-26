#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { HereyaAstroTemplateStack } from '../lib/hereya-astro-template-stack';

const app = new cdk.App();
new HereyaAstroTemplateStack(app, process.env.STACK_NAME!, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
