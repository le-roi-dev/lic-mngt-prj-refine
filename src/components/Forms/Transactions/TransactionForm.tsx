"use client";

import { useEffect, useState } from "react";
import { FieldConfig, GenericFormProps } from "../FormControlWrapper";
import { Transaction } from "@/types/types";
import TransactionFormFields from "./TransactionFormFields";
import PartnerFormFields from "../Partners/PartnerFormFields";
import GenericForm from "../GenericForm";

export type TransactionFormProps = GenericFormProps & {
  transaction?: Transaction;
};

const TransactionForm = (props: TransactionFormProps) => {

  return (
    <div className="flex flex-col gap-6">
      <GenericForm {...{ ...props, fields: TransactionFormFields }} />
      <GenericForm {...{ ...props, fields: PartnerFormFields.BillingPartnerInformationFormFields }} />
      <GenericForm {...{ ...props, fields: PartnerFormFields.ShippingPartnerInformationFormFields }} />
    </div>
  );
};

export default TransactionForm;
