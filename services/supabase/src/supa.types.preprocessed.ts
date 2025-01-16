export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      account: {
        Row: {
          account: string
          created_at: string
          short_link: string | null
        }
        Insert: {
          account: string
          created_at?: string
          short_link?: string | null
        }
        Update: {
          account?: string
          created_at?: string
          short_link?: string | null
        }
        Relationships: []
      }
      alchemy_hooks: {
        Row: {
          id: string
          is_active: boolean
          network: string
          signing_key: string
          time_created: string
          type: string
          url: string
          version: string
        }
        Insert: {
          id: string
          is_active: boolean
          network: string
          signing_key: string
          time_created: string
          type: string
          url: string
          version: string
        }
        Update: {
          id?: string
          is_active?: boolean
          network?: string
          signing_key?: string
          time_created?: string
          type?: string
          url?: string
          version?: string
        }
        Relationships: []
      }
      auction: {
        Row: {
          address_auctioning_token: string | null
          address_bidding_token: string | null
          allow_list_manager: string | null
          allow_list_signer: string | null
          chain_id: number
          created_at: string
          current_bidding_amount: number | null
          current_clearing_order_buy_amount: number | null
          current_clearing_order_sell_amount: number | null
          current_clearing_price: number | null
          current_volume: number | null
          decimals_auctioning_token: number | null
          decimals_bidding_token: number | null
          end_time_timestamp: string | null
          exact_order_id: number
          interest_score: number | null
          is_atomic_closure_allowed: boolean | null
          is_private_auction: boolean | null
          min_funding_threshold: number | null
          minimum_bidding_amount_per_order: number | null
          order_cancellation_end_date: string | null
          project_id: number | null
          starting_time_stamp: string | null
          symbol_auctioning_token: string | null
          symbol_bidding_token: string | null
          usd_amount_traded: number | null
        }
        Insert: {
          address_auctioning_token?: string | null
          address_bidding_token?: string | null
          allow_list_manager?: string | null
          allow_list_signer?: string | null
          chain_id: number
          created_at?: string
          current_bidding_amount?: number | null
          current_clearing_order_buy_amount?: number | null
          current_clearing_order_sell_amount?: number | null
          current_clearing_price?: number | null
          current_volume?: number | null
          decimals_auctioning_token?: number | null
          decimals_bidding_token?: number | null
          end_time_timestamp?: string | null
          exact_order_id: number
          interest_score?: number | null
          is_atomic_closure_allowed?: boolean | null
          is_private_auction?: boolean | null
          min_funding_threshold?: number | null
          minimum_bidding_amount_per_order?: number | null
          order_cancellation_end_date?: string | null
          project_id?: number | null
          starting_time_stamp?: string | null
          symbol_auctioning_token?: string | null
          symbol_bidding_token?: string | null
          usd_amount_traded?: number | null
        }
        Update: {
          address_auctioning_token?: string | null
          address_bidding_token?: string | null
          allow_list_manager?: string | null
          allow_list_signer?: string | null
          chain_id?: number
          created_at?: string
          current_bidding_amount?: number | null
          current_clearing_order_buy_amount?: number | null
          current_clearing_order_sell_amount?: number | null
          current_clearing_price?: number | null
          current_volume?: number | null
          decimals_auctioning_token?: number | null
          decimals_bidding_token?: number | null
          end_time_timestamp?: string | null
          exact_order_id?: number
          interest_score?: number | null
          is_atomic_closure_allowed?: boolean | null
          is_private_auction?: boolean | null
          min_funding_threshold?: number | null
          minimum_bidding_amount_per_order?: number | null
          order_cancellation_end_date?: string | null
          project_id?: number | null
          starting_time_stamp?: string | null
          symbol_auctioning_token?: string | null
          symbol_bidding_token?: string | null
          usd_amount_traded?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'auction_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'project'
            referencedColumns: ['id']
          },
        ]
      }
      auction_order: {
        Row: {
          auction_id: number
          buy_amount: number
          created_at: string
          price: number | null
          sell_amount: number
          timestamp: string | null
          transactionHash: string
          user_id: number
          volume: number | null
        }
        Insert: {
          auction_id: number
          buy_amount: number
          created_at?: string
          price?: number | null
          sell_amount: number
          timestamp?: string | null
          transactionHash: string
          user_id: number
          volume?: number | null
        }
        Update: {
          auction_id?: number
          buy_amount?: number
          created_at?: string
          price?: number | null
          sell_amount?: number
          timestamp?: string | null
          transactionHash?: string
          user_id?: number
          volume?: number | null
        }
        Relationships: []
      }
      document_sections: {
        Row: {
          content: string
          document_id: number
          embedding: string | null
          id: number
        }
        Insert: {
          content: string
          document_id: number
          embedding?: string | null
          id?: never
        }
        Update: {
          content?: string
          document_id?: number
          embedding?: string | null
          id?: never
        }
        Relationships: [
          {
            foreignKeyName: 'document_sections_document_id_fkey'
            columns: ['document_id']
            isOneToOne: false
            referencedRelation: 'documents'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'document_sections_document_id_fkey'
            columns: ['document_id']
            isOneToOne: false
            referencedRelation: 'documents_with_storage_path'
            referencedColumns: ['id']
          },
        ]
      }
      documents: {
        Row: {
          created_at: string
          created_by: string
          id: number
          name: string
          storage_object_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: never
          name: string
          storage_object_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: never
          name?: string
          storage_object_id?: string
        }
        Relationships: []
      }
      esr: {
        Row: {
          account: string
          code: string
          created_at: string
          id: string
          trx_id: string
        }
        Insert: {
          account: string
          code: string
          created_at?: string
          id?: string
          trx_id: string
        }
        Update: {
          account?: string
          code?: string
          created_at?: string
          id?: string
          trx_id?: string
        }
        Relationships: []
      }
      indexer_meta: {
        Row: {
          id: number
          last_indexed_block: string
        }
        Insert: {
          id?: number
          last_indexed_block: string
        }
        Update: {
          id?: number
          last_indexed_block?: string
        }
        Relationships: []
      }
      presale: {
        Row: {
          account: string
          close_timestamptz: string | null
          contributors: number
          created_at: string
          end_timestamptz: string
          fundraising_goal: number
          id: number
          max_allocation: number
          project_id: number
          start_timestamptz: string
          total_raised: number
        }
        Insert: {
          account: string
          close_timestamptz?: string | null
          contributors?: number
          created_at?: string
          end_timestamptz: string
          fundraising_goal: number
          id?: number
          max_allocation: number
          project_id: number
          start_timestamptz: string
          total_raised?: number
        }
        Update: {
          account?: string
          close_timestamptz?: string | null
          contributors?: number
          created_at?: string
          end_timestamptz?: string
          fundraising_goal?: number
          id?: number
          max_allocation?: number
          project_id?: number
          start_timestamptz?: string
          total_raised?: number
        }
        Relationships: [
          {
            foreignKeyName: 'presale_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'project'
            referencedColumns: ['id']
          },
        ]
      }
      presale_address: {
        Row: {
          chain_id: string
          chain_type: Database['public']['Enums']['chain_type']
          created_at: string
          deposit_address: string
          presale_id: number
        }
        Insert: {
          chain_id: string
          chain_type: Database['public']['Enums']['chain_type']
          created_at?: string
          deposit_address: string
          presale_id: number
        }
        Update: {
          chain_id?: string
          chain_type?: Database['public']['Enums']['chain_type']
          created_at?: string
          deposit_address?: string
          presale_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'presale_addresses_presale_id_fkey'
            columns: ['presale_id']
            isOneToOne: false
            referencedRelation: 'presale'
            referencedColumns: ['id']
          },
        ]
      }
      presale_deposit: {
        Row: {
          account: string
          address: string
          amount: number
          created_at: string
          deposit_hash: string
          issuance_hash: string | null
          presale_id: number
          project_id: number
          state: Database['public']['Enums']['state']
        }
        Insert: {
          account: string
          address: string
          amount: number
          created_at?: string
          deposit_hash: string
          issuance_hash?: string | null
          presale_id: number
          project_id: number
          state?: Database['public']['Enums']['state']
        }
        Update: {
          account?: string
          address?: string
          amount?: number
          created_at?: string
          deposit_hash?: string
          issuance_hash?: string | null
          presale_id?: number
          project_id?: number
          state?: Database['public']['Enums']['state']
        }
        Relationships: [
          {
            foreignKeyName: 'presale_deposit_account_fkey'
            columns: ['account']
            isOneToOne: false
            referencedRelation: 'account'
            referencedColumns: ['account']
          },
          {
            foreignKeyName: 'presale_deposit_address_project_id_account_fkey'
            columns: ['address', 'project_id', 'account']
            isOneToOne: false
            referencedRelation: 'whitelist'
            referencedColumns: ['address', 'project_id', 'account']
          },
          {
            foreignKeyName: 'presale_deposit_deposit_hash_fkey'
            columns: ['deposit_hash']
            isOneToOne: true
            referencedRelation: 'transaction'
            referencedColumns: ['hash']
          },
          {
            foreignKeyName: 'presale_deposit_issuance_hash_fkey'
            columns: ['issuance_hash']
            isOneToOne: false
            referencedRelation: 'transaction'
            referencedColumns: ['hash']
          },
          {
            foreignKeyName: 'presale_deposit_presale_id_fkey'
            columns: ['presale_id']
            isOneToOne: false
            referencedRelation: 'presale'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'presale_deposit_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'project'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'presale_deposits_presale_id_fkey'
            columns: ['presale_id']
            isOneToOne: false
            referencedRelation: 'presale'
            referencedColumns: ['id']
          },
        ]
      }
      project: {
        Row: {
          created_at: string
          id: number
          name: string
          pitch: string
          token_address: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          pitch: string
          token_address?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          pitch?: string
          token_address?: string | null
        }
        Relationships: []
      }
      session: {
        Row: {
          account: string
          created_at: string
          esr_code: string | null
          id: string
          tx: string
        }
        Insert: {
          account: string
          created_at?: string
          esr_code?: string | null
          id?: string
          tx: string
        }
        Update: {
          account?: string
          created_at?: string
          esr_code?: string | null
          id?: string
          tx?: string
        }
        Relationships: []
      }
      transaction: {
        Row: {
          chain_id: string
          chain_type: Database['public']['Enums']['chain_type']
          created_at: string
          final: boolean
          hash: string
          trx_type: Database['public']['Enums']['trx_type']
        }
        Insert: {
          chain_id: string
          chain_type: Database['public']['Enums']['chain_type']
          created_at?: string
          final?: boolean
          hash: string
          trx_type: Database['public']['Enums']['trx_type']
        }
        Update: {
          chain_id?: string
          chain_type?: Database['public']['Enums']['chain_type']
          created_at?: string
          final?: boolean
          hash?: string
          trx_type?: Database['public']['Enums']['trx_type']
        }
        Relationships: []
      }
      whitelist: {
        Row: {
          account: string
          address: string
          created_at: string
          project_id: number
          signed_message: string
        }
        Insert: {
          account: string
          address: string
          created_at?: string
          project_id: number
          signed_message: string
        }
        Update: {
          account?: string
          address?: string
          created_at?: string
          project_id?: number
          signed_message?: string
        }
        Relationships: [
          {
            foreignKeyName: 'whitelist_project_id_fkey'
            columns: ['project_id']
            isOneToOne: false
            referencedRelation: 'project'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      documents_with_storage_path: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number | null
          name: string | null
          storage_object_id: string | null
          storage_object_path: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      match_document_sections: {
        Args: {
          embedding: string
          match_threshold: number
        }
        Returns: {
          content: string
          document_id: number
          embedding: string | null
          id: number
        }[]
      }
    }
    Enums: {
      chain_type: 'evm' | 'eos' | 'solana' | 'cosmos'
      state: 'created' | 'processing' | 'processed' | 'error'
      trx_type:
        | 'presale_deposit'
        | 'usdcred_deposit'
        | 'usdcred_withdrawal'
        | 'presale_token_issuance'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never
