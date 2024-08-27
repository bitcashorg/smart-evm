// Generated by ts-to-zod
import { z } from "zod";
import { Json } from "./supa.types";

export const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z
    .union([
      z.string(),
      z.number(),
      z.boolean(),
      z.record(z.union([jsonSchema, z.undefined()])),
      z.array(jsonSchema),
    ])
    .nullable(),
);

export const accountRowSchema = z.object({
  account: z.string(),
  created_at: z.string(),
  short_link: z.string().nullable(),
});

export const accountInsertSchema = z.object({
  account: z.string(),
  created_at: z.string().optional(),
  short_link: z.string().optional().nullable(),
});

export const accountUpdateSchema = z.object({
  account: z.string().optional(),
  created_at: z.string().optional(),
  short_link: z.string().optional().nullable(),
});

export const accountRelationshipsSchema = z.tuple([]);

export const auctionRowSchema = z.object({
  address_auctioning_token: z.string().nullable(),
  address_bidding_token: z.string().nullable(),
  allow_list_manager: z.string().nullable(),
  allow_list_signer: z.string().nullable(),
  chain_id: z.number(),
  created_at: z.string(),
  current_bidding_amount: z.number().nullable(),
  current_clearing_order_buy_amount: z.number().nullable(),
  current_clearing_order_sell_amount: z.number().nullable(),
  current_clearing_price: z.number().nullable(),
  current_volume: z.number().nullable(),
  decimals_auctioning_token: z.number().nullable(),
  decimals_bidding_token: z.number().nullable(),
  end_time_timestamp: z.string().nullable(),
  exact_order_id: z.number(),
  interest_score: z.number().nullable(),
  is_atomic_closure_allowed: z.boolean().nullable(),
  is_private_auction: z.boolean().nullable(),
  min_funding_threshold: z.number().nullable(),
  minimum_bidding_amount_per_order: z.number().nullable(),
  order_cancellation_end_date: z.string().nullable(),
  project_id: z.number().nullable(),
  starting_time_stamp: z.string().nullable(),
  symbol_auctioning_token: z.string().nullable(),
  symbol_bidding_token: z.string().nullable(),
  usd_amount_traded: z.number().nullable(),
});

export const auctionInsertSchema = z.object({
  address_auctioning_token: z.string().optional().nullable(),
  address_bidding_token: z.string().optional().nullable(),
  allow_list_manager: z.string().optional().nullable(),
  allow_list_signer: z.string().optional().nullable(),
  chain_id: z.number(),
  created_at: z.string().optional(),
  current_bidding_amount: z.number().optional().nullable(),
  current_clearing_order_buy_amount: z.number().optional().nullable(),
  current_clearing_order_sell_amount: z.number().optional().nullable(),
  current_clearing_price: z.number().optional().nullable(),
  current_volume: z.number().optional().nullable(),
  decimals_auctioning_token: z.number().optional().nullable(),
  decimals_bidding_token: z.number().optional().nullable(),
  end_time_timestamp: z.string().optional().nullable(),
  exact_order_id: z.number(),
  interest_score: z.number().optional().nullable(),
  is_atomic_closure_allowed: z.boolean().optional().nullable(),
  is_private_auction: z.boolean().optional().nullable(),
  min_funding_threshold: z.number().optional().nullable(),
  minimum_bidding_amount_per_order: z.number().optional().nullable(),
  order_cancellation_end_date: z.string().optional().nullable(),
  project_id: z.number().optional().nullable(),
  starting_time_stamp: z.string().optional().nullable(),
  symbol_auctioning_token: z.string().optional().nullable(),
  symbol_bidding_token: z.string().optional().nullable(),
  usd_amount_traded: z.number().optional().nullable(),
});

export const auctionUpdateSchema = z.object({
  address_auctioning_token: z.string().optional().nullable(),
  address_bidding_token: z.string().optional().nullable(),
  allow_list_manager: z.string().optional().nullable(),
  allow_list_signer: z.string().optional().nullable(),
  chain_id: z.number().optional(),
  created_at: z.string().optional(),
  current_bidding_amount: z.number().optional().nullable(),
  current_clearing_order_buy_amount: z.number().optional().nullable(),
  current_clearing_order_sell_amount: z.number().optional().nullable(),
  current_clearing_price: z.number().optional().nullable(),
  current_volume: z.number().optional().nullable(),
  decimals_auctioning_token: z.number().optional().nullable(),
  decimals_bidding_token: z.number().optional().nullable(),
  end_time_timestamp: z.string().optional().nullable(),
  exact_order_id: z.number().optional(),
  interest_score: z.number().optional().nullable(),
  is_atomic_closure_allowed: z.boolean().optional().nullable(),
  is_private_auction: z.boolean().optional().nullable(),
  min_funding_threshold: z.number().optional().nullable(),
  minimum_bidding_amount_per_order: z.number().optional().nullable(),
  order_cancellation_end_date: z.string().optional().nullable(),
  project_id: z.number().optional().nullable(),
  starting_time_stamp: z.string().optional().nullable(),
  symbol_auctioning_token: z.string().optional().nullable(),
  symbol_bidding_token: z.string().optional().nullable(),
  usd_amount_traded: z.number().optional().nullable(),
});

export const auctionRelationshipsSchema = z.tuple([
  z.object({
    foreignKeyName: z.literal("auction_project_id_fkey"),
    columns: z.tuple([z.literal("project_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("project"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
]);

export const esrRowSchema = z.object({
  account: z.string(),
  code: z.string(),
  created_at: z.string(),
  id: z.string(),
  trx_id: z.string(),
});

export const esrInsertSchema = z.object({
  account: z.string(),
  code: z.string(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  trx_id: z.string(),
});

export const esrUpdateSchema = z.object({
  account: z.string().optional(),
  code: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  trx_id: z.string().optional(),
});

export const esrRelationshipsSchema = z.tuple([]);

export const indexerRowSchema = z.object({
  id: z.number(),
  last_indexed_block: z.string(),
});

export const indexerInsertSchema = z.object({
  id: z.number().optional(),
  last_indexed_block: z.string(),
});

export const indexerUpdateSchema = z.object({
  id: z.number().optional(),
  last_indexed_block: z.string().optional(),
});

export const indexerRelationshipsSchema = z.tuple([]);

export const orderRowSchema = z.object({
  auction_id: z.number(),
  buy_amount: z.number(),
  created_at: z.string(),
  price: z.number().nullable(),
  sell_amount: z.number(),
  timestamp: z.string().nullable(),
  transactionHash: z.string(),
  user_id: z.number(),
  volume: z.number().nullable(),
});

export const orderInsertSchema = z.object({
  auction_id: z.number(),
  buy_amount: z.number(),
  created_at: z.string().optional(),
  price: z.number().optional().nullable(),
  sell_amount: z.number(),
  timestamp: z.string().optional().nullable(),
  transactionHash: z.string(),
  user_id: z.number(),
  volume: z.number().optional().nullable(),
});

export const orderUpdateSchema = z.object({
  auction_id: z.number().optional(),
  buy_amount: z.number().optional(),
  created_at: z.string().optional(),
  price: z.number().optional().nullable(),
  sell_amount: z.number().optional(),
  timestamp: z.string().optional().nullable(),
  transactionHash: z.string().optional(),
  user_id: z.number().optional(),
  volume: z.number().optional().nullable(),
});

export const orderRelationshipsSchema = z.tuple([]);

export const presaleRowSchema = z.object({
  account: z.string(),
  address: z.string(),
  close_timestampz: z.string().nullable(),
  created_at: z.string(),
  end_timestamptz: z.string(),
  fundraising_goal: z.number(),
  id: z.number(),
  max_allocation: z.number(),
  project_id: z.number(),
  start_timestamptz: z.string(),
  total_raised: z.number(),
});

export const presaleInsertSchema = z.object({
  account: z.string(),
  address: z.string(),
  close_timestampz: z.string().optional().nullable(),
  created_at: z.string().optional(),
  end_timestamptz: z.string(),
  fundraising_goal: z.number(),
  id: z.number().optional(),
  max_allocation: z.number(),
  project_id: z.number(),
  start_timestamptz: z.string(),
  total_raised: z.number().optional(),
});

export const presaleUpdateSchema = z.object({
  account: z.string().optional(),
  address: z.string().optional(),
  close_timestampz: z.string().optional().nullable(),
  created_at: z.string().optional(),
  end_timestamptz: z.string().optional(),
  fundraising_goal: z.number().optional(),
  id: z.number().optional(),
  max_allocation: z.number().optional(),
  project_id: z.number().optional(),
  start_timestamptz: z.string().optional(),
  total_raised: z.number().optional(),
});

export const presaleRelationshipsSchema = z.tuple([
  z.object({
    foreignKeyName: z.literal("presale_project_id_fkey"),
    columns: z.tuple([z.literal("project_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("project"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
]);

export const presaleDepositRowSchema = z.object({
  amount: z.number(),
  created_at: z.string(),
  deposit_hash: z.string(),
  id: z.string(),
  issuance_hash: z.string().nullable(),
  presale_id: z.number(),
});

export const presaleDepositInsertSchema = z.object({
  amount: z.number(),
  created_at: z.string().optional(),
  deposit_hash: z.string(),
  id: z.string().optional(),
  issuance_hash: z.string().optional().nullable(),
  presale_id: z.number(),
});

export const presaleDepositUpdateSchema = z.object({
  amount: z.number().optional(),
  created_at: z.string().optional(),
  deposit_hash: z.string().optional(),
  id: z.string().optional(),
  issuance_hash: z.string().optional().nullable(),
  presale_id: z.number().optional(),
});

export const presaleDepositRelationshipsSchema = z.tuple([
  z.object({
    foreignKeyName: z.literal("presale_deposit_deposit_hash_fkey"),
    columns: z.tuple([z.literal("deposit_hash")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("transaction"),
    referencedColumns: z.tuple([z.literal("hash")]),
  }),
  z.object({
    foreignKeyName: z.literal("presale_deposit_issuance_hash_fkey"),
    columns: z.tuple([z.literal("issuance_hash")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("transaction"),
    referencedColumns: z.tuple([z.literal("hash")]),
  }),
  z.object({
    foreignKeyName: z.literal("presale_deposit_presale_id_fkey"),
    columns: z.tuple([z.literal("presale_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("presale"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
  z.object({
    foreignKeyName: z.literal("presale_deposits_presale_id_fkey"),
    columns: z.tuple([z.literal("presale_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("presale"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
]);

export const projectRowSchema = z.object({
  created_at: z.string(),
  id: z.number(),
  name: z.string(),
  pitch: z.string(),
});

export const projectInsertSchema = z.object({
  created_at: z.string().optional(),
  id: z.number().optional(),
  name: z.string(),
  pitch: z.string(),
});

export const projectUpdateSchema = z.object({
  created_at: z.string().optional(),
  id: z.number().optional(),
  name: z.string().optional(),
  pitch: z.string().optional(),
});

export const projectRelationshipsSchema = z.tuple([]);

export const sessionRowSchema = z.object({
  account: z.string(),
  created_at: z.string(),
  esr_code: z.string().nullable(),
  id: z.string(),
  tx: z.string(),
});

export const sessionInsertSchema = z.object({
  account: z.string(),
  created_at: z.string().optional(),
  esr_code: z.string().optional().nullable(),
  id: z.string().optional(),
  tx: z.string(),
});

export const sessionUpdateSchema = z.object({
  account: z.string().optional(),
  created_at: z.string().optional(),
  esr_code: z.string().optional().nullable(),
  id: z.string().optional(),
  tx: z.string().optional(),
});

export const sessionRelationshipsSchema = z.tuple([]);

export const chainTypeSchema = z.union([
  z.literal("evm"),
  z.literal("eos"),
  z.literal("solana"),
  z.literal("cosmos"),
]);

export const trxTypeSchema = z.union([
  z.literal("presale_deposit"),
  z.literal("usdcred_deposit"),
  z.literal("usdcred_withdrawal"),
]);

export const transactionInsertSchema = z.object({
  chain_id: z.number().optional().nullable(),
  chain_type: chainTypeSchema.optional().nullable(),
  created_at: z.string().optional(),
  final: z.boolean().optional().nullable(),
  hash: z.string(),
  trx_type: trxTypeSchema.optional().nullable(),
});

export const transactionUpdateSchema = z.object({
  chain_id: z.number().optional().nullable(),
  chain_type: chainTypeSchema.optional().nullable(),
  created_at: z.string().optional(),
  final: z.boolean().optional().nullable(),
  hash: z.string().optional(),
  trx_type: trxTypeSchema.optional().nullable(),
});

export const transactionRelationshipsSchema = z.tuple([]);

export const transferRowSchema = z.object({
  amount: z.number().nullable(),
  bl_presale_trx: z.string().nullable(),
  from: z.string().nullable(),
  to: z.string().nullable(),
  token: z.string().nullable(),
  trx_hash: z.string(),
  type: z.string().nullable(),
  usdcred_trx: z.string().nullable(),
});

export const transferInsertSchema = z.object({
  amount: z.number().optional().nullable(),
  bl_presale_trx: z.string().optional().nullable(),
  from: z.string().optional().nullable(),
  to: z.string().optional().nullable(),
  token: z.string().optional().nullable(),
  trx_hash: z.string(),
  type: z.string().optional().nullable(),
  usdcred_trx: z.string().optional().nullable(),
});

export const transferUpdateSchema = z.object({
  amount: z.number().optional().nullable(),
  bl_presale_trx: z.string().optional().nullable(),
  from: z.string().optional().nullable(),
  to: z.string().optional().nullable(),
  token: z.string().optional().nullable(),
  trx_hash: z.string().optional(),
  type: z.string().optional().nullable(),
  usdcred_trx: z.string().optional().nullable(),
});

export const transferRelationshipsSchema = z.tuple([]);

export const whitelistRowSchema = z.object({
  account: z.string(),
  address: z.string(),
  created_at: z.string(),
  project_id: z.number(),
  signed_message: z.string(),
});

export const whitelistInsertSchema = z.object({
  account: z.string(),
  address: z.string(),
  created_at: z.string().optional(),
  project_id: z.number(),
  signed_message: z.string(),
});

export const whitelistUpdateSchema = z.object({
  account: z.string().optional(),
  address: z.string().optional(),
  created_at: z.string().optional(),
  project_id: z.number().optional(),
  signed_message: z.string().optional(),
});

export const whitelistRelationshipsSchema = z.tuple([
  z.object({
    foreignKeyName: z.literal("whitelist_project_id_fkey"),
    columns: z.tuple([z.literal("project_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("project"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
]);

export const transactionRowSchema = z.object({
  chain_id: z.number().nullable(),
  chain_type: chainTypeSchema.nullable(),
  created_at: z.string(),
  final: z.boolean().nullable(),
  hash: z.string(),
  trx_type: trxTypeSchema.nullable(),
});
