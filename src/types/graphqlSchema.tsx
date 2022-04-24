import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  conditions: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "actions" */
export type Actions = {
  __typename?: 'actions';
  action_id: Scalars['Int'];
  action_text: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "actions" */
export type Actions_Aggregate = {
  __typename?: 'actions_aggregate';
  aggregate?: Maybe<Actions_Aggregate_Fields>;
  nodes: Array<Actions>;
};

/** aggregate fields of "actions" */
export type Actions_Aggregate_Fields = {
  __typename?: 'actions_aggregate_fields';
  avg?: Maybe<Actions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Actions_Max_Fields>;
  min?: Maybe<Actions_Min_Fields>;
  stddev?: Maybe<Actions_Stddev_Fields>;
  stddev_pop?: Maybe<Actions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Actions_Stddev_Samp_Fields>;
  sum?: Maybe<Actions_Sum_Fields>;
  var_pop?: Maybe<Actions_Var_Pop_Fields>;
  var_samp?: Maybe<Actions_Var_Samp_Fields>;
  variance?: Maybe<Actions_Variance_Fields>;
};


/** aggregate fields of "actions" */
export type Actions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Actions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Actions_Avg_Fields = {
  __typename?: 'actions_avg_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "actions". All fields are combined with a logical 'AND'. */
export type Actions_Bool_Exp = {
  _and?: InputMaybe<Array<Actions_Bool_Exp>>;
  _not?: InputMaybe<Actions_Bool_Exp>;
  _or?: InputMaybe<Array<Actions_Bool_Exp>>;
  action_id?: InputMaybe<Int_Comparison_Exp>;
  action_text?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "actions" */
export enum Actions_Constraint {
  /** unique or primary key constraint */
  ActionsPkey = 'actions_pkey'
}

/** input type for incrementing numeric columns in table "actions" */
export type Actions_Inc_Input = {
  action_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "actions" */
export type Actions_Insert_Input = {
  action_id?: InputMaybe<Scalars['Int']>;
  action_text?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Actions_Max_Fields = {
  __typename?: 'actions_max_fields';
  action_id?: Maybe<Scalars['Int']>;
  action_text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Actions_Min_Fields = {
  __typename?: 'actions_min_fields';
  action_id?: Maybe<Scalars['Int']>;
  action_text?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "actions" */
export type Actions_Mutation_Response = {
  __typename?: 'actions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Actions>;
};

/** on_conflict condition type for table "actions" */
export type Actions_On_Conflict = {
  constraint: Actions_Constraint;
  update_columns?: Array<Actions_Update_Column>;
  where?: InputMaybe<Actions_Bool_Exp>;
};

/** Ordering options when selecting data from "actions". */
export type Actions_Order_By = {
  action_id?: InputMaybe<Order_By>;
  action_text?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: actions */
export type Actions_Pk_Columns_Input = {
  action_id: Scalars['Int'];
};

/** select columns of table "actions" */
export enum Actions_Select_Column {
  /** column name */
  ActionId = 'action_id',
  /** column name */
  ActionText = 'action_text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "actions" */
export type Actions_Set_Input = {
  action_id?: InputMaybe<Scalars['Int']>;
  action_text?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Actions_Stddev_Fields = {
  __typename?: 'actions_stddev_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Actions_Stddev_Pop_Fields = {
  __typename?: 'actions_stddev_pop_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Actions_Stddev_Samp_Fields = {
  __typename?: 'actions_stddev_samp_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Actions_Sum_Fields = {
  __typename?: 'actions_sum_fields';
  action_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "actions" */
export enum Actions_Update_Column {
  /** column name */
  ActionId = 'action_id',
  /** column name */
  ActionText = 'action_text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Actions_Var_Pop_Fields = {
  __typename?: 'actions_var_pop_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Actions_Var_Samp_Fields = {
  __typename?: 'actions_var_samp_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Actions_Variance_Fields = {
  __typename?: 'actions_variance_fields';
  action_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "conditions". All fields are combined with logical 'AND'. */
export type Conditions_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['conditions']>;
  _gt?: InputMaybe<Scalars['conditions']>;
  _gte?: InputMaybe<Scalars['conditions']>;
  _in?: InputMaybe<Array<Scalars['conditions']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['conditions']>;
  _lte?: InputMaybe<Scalars['conditions']>;
  _neq?: InputMaybe<Scalars['conditions']>;
  _nin?: InputMaybe<Array<Scalars['conditions']>>;
};

/** columns and relationships of "creates" */
export type Creates = {
  __typename?: 'creates';
  conditions: Scalars['conditions'];
  create_id: Scalars['Int'];
  create_name: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "creates" */
export type Creates_Aggregate = {
  __typename?: 'creates_aggregate';
  aggregate?: Maybe<Creates_Aggregate_Fields>;
  nodes: Array<Creates>;
};

/** aggregate fields of "creates" */
export type Creates_Aggregate_Fields = {
  __typename?: 'creates_aggregate_fields';
  avg?: Maybe<Creates_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Creates_Max_Fields>;
  min?: Maybe<Creates_Min_Fields>;
  stddev?: Maybe<Creates_Stddev_Fields>;
  stddev_pop?: Maybe<Creates_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Creates_Stddev_Samp_Fields>;
  sum?: Maybe<Creates_Sum_Fields>;
  var_pop?: Maybe<Creates_Var_Pop_Fields>;
  var_samp?: Maybe<Creates_Var_Samp_Fields>;
  variance?: Maybe<Creates_Variance_Fields>;
};


/** aggregate fields of "creates" */
export type Creates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Creates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Creates_Avg_Fields = {
  __typename?: 'creates_avg_fields';
  create_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "creates". All fields are combined with a logical 'AND'. */
export type Creates_Bool_Exp = {
  _and?: InputMaybe<Array<Creates_Bool_Exp>>;
  _not?: InputMaybe<Creates_Bool_Exp>;
  _or?: InputMaybe<Array<Creates_Bool_Exp>>;
  conditions?: InputMaybe<Conditions_Comparison_Exp>;
  create_id?: InputMaybe<Int_Comparison_Exp>;
  create_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "creates" */
export enum Creates_Constraint {
  /** unique or primary key constraint */
  CreatesPkey = 'creates_pkey'
}

/** input type for incrementing numeric columns in table "creates" */
export type Creates_Inc_Input = {
  create_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "creates" */
export type Creates_Insert_Input = {
  conditions?: InputMaybe<Scalars['conditions']>;
  create_id?: InputMaybe<Scalars['Int']>;
  create_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Creates_Max_Fields = {
  __typename?: 'creates_max_fields';
  create_id?: Maybe<Scalars['Int']>;
  create_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Creates_Min_Fields = {
  __typename?: 'creates_min_fields';
  create_id?: Maybe<Scalars['Int']>;
  create_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "creates" */
export type Creates_Mutation_Response = {
  __typename?: 'creates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Creates>;
};

/** on_conflict condition type for table "creates" */
export type Creates_On_Conflict = {
  constraint: Creates_Constraint;
  update_columns?: Array<Creates_Update_Column>;
  where?: InputMaybe<Creates_Bool_Exp>;
};

/** Ordering options when selecting data from "creates". */
export type Creates_Order_By = {
  conditions?: InputMaybe<Order_By>;
  create_id?: InputMaybe<Order_By>;
  create_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: creates */
export type Creates_Pk_Columns_Input = {
  create_id: Scalars['Int'];
};

/** select columns of table "creates" */
export enum Creates_Select_Column {
  /** column name */
  Conditions = 'conditions',
  /** column name */
  CreateId = 'create_id',
  /** column name */
  CreateName = 'create_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "creates" */
export type Creates_Set_Input = {
  conditions?: InputMaybe<Scalars['conditions']>;
  create_id?: InputMaybe<Scalars['Int']>;
  create_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Creates_Stddev_Fields = {
  __typename?: 'creates_stddev_fields';
  create_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Creates_Stddev_Pop_Fields = {
  __typename?: 'creates_stddev_pop_fields';
  create_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Creates_Stddev_Samp_Fields = {
  __typename?: 'creates_stddev_samp_fields';
  create_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Creates_Sum_Fields = {
  __typename?: 'creates_sum_fields';
  create_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "creates" */
export enum Creates_Update_Column {
  /** column name */
  Conditions = 'conditions',
  /** column name */
  CreateId = 'create_id',
  /** column name */
  CreateName = 'create_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Creates_Var_Pop_Fields = {
  __typename?: 'creates_var_pop_fields';
  create_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Creates_Var_Samp_Fields = {
  __typename?: 'creates_var_samp_fields';
  create_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Creates_Variance_Fields = {
  __typename?: 'creates_variance_fields';
  create_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "actions" */
  delete_actions?: Maybe<Actions_Mutation_Response>;
  /** delete single row from the table: "actions" */
  delete_actions_by_pk?: Maybe<Actions>;
  /** delete data from the table: "creates" */
  delete_creates?: Maybe<Creates_Mutation_Response>;
  /** delete single row from the table: "creates" */
  delete_creates_by_pk?: Maybe<Creates>;
  /** delete data from the table: "online_users" */
  delete_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "actions" */
  insert_actions?: Maybe<Actions_Mutation_Response>;
  /** insert a single row into the table: "actions" */
  insert_actions_one?: Maybe<Actions>;
  /** insert data into the table: "creates" */
  insert_creates?: Maybe<Creates_Mutation_Response>;
  /** insert a single row into the table: "creates" */
  insert_creates_one?: Maybe<Creates>;
  /** insert data into the table: "online_users" */
  insert_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** insert a single row into the table: "online_users" */
  insert_online_users_one?: Maybe<Online_Users>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "actions" */
  update_actions?: Maybe<Actions_Mutation_Response>;
  /** update single row of the table: "actions" */
  update_actions_by_pk?: Maybe<Actions>;
  /** update data of the table: "creates" */
  update_creates?: Maybe<Creates_Mutation_Response>;
  /** update single row of the table: "creates" */
  update_creates_by_pk?: Maybe<Creates>;
  /** update data of the table: "online_users" */
  update_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_ActionsArgs = {
  where: Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Actions_By_PkArgs = {
  action_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CreatesArgs = {
  where: Creates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Creates_By_PkArgs = {
  create_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Online_UsersArgs = {
  where: Online_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ActionsArgs = {
  objects: Array<Actions_Insert_Input>;
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Actions_OneArgs = {
  object: Actions_Insert_Input;
  on_conflict?: InputMaybe<Actions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CreatesArgs = {
  objects: Array<Creates_Insert_Input>;
  on_conflict?: InputMaybe<Creates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Creates_OneArgs = {
  object: Creates_Insert_Input;
  on_conflict?: InputMaybe<Creates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Online_UsersArgs = {
  objects: Array<Online_Users_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Online_Users_OneArgs = {
  object: Online_Users_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ActionsArgs = {
  _inc?: InputMaybe<Actions_Inc_Input>;
  _set?: InputMaybe<Actions_Set_Input>;
  where: Actions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Actions_By_PkArgs = {
  _inc?: InputMaybe<Actions_Inc_Input>;
  _set?: InputMaybe<Actions_Set_Input>;
  pk_columns: Actions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CreatesArgs = {
  _inc?: InputMaybe<Creates_Inc_Input>;
  _set?: InputMaybe<Creates_Set_Input>;
  where: Creates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Creates_By_PkArgs = {
  _inc?: InputMaybe<Creates_Inc_Input>;
  _set?: InputMaybe<Creates_Set_Input>;
  pk_columns: Creates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Online_UsersArgs = {
  _set?: InputMaybe<Online_Users_Set_Input>;
  where: Online_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** columns and relationships of "online_users" */
export type Online_Users = {
  __typename?: 'online_users';
  last_seen?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "online_users" */
export type Online_Users_Aggregate = {
  __typename?: 'online_users_aggregate';
  aggregate?: Maybe<Online_Users_Aggregate_Fields>;
  nodes: Array<Online_Users>;
};

/** aggregate fields of "online_users" */
export type Online_Users_Aggregate_Fields = {
  __typename?: 'online_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Online_Users_Max_Fields>;
  min?: Maybe<Online_Users_Min_Fields>;
};


/** aggregate fields of "online_users" */
export type Online_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Online_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "online_users". All fields are combined with a logical 'AND'. */
export type Online_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Online_Users_Bool_Exp>>;
  _not?: InputMaybe<Online_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Online_Users_Bool_Exp>>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "online_users" */
export type Online_Users_Insert_Input = {
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Online_Users_Max_Fields = {
  __typename?: 'online_users_max_fields';
  last_seen?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Online_Users_Min_Fields = {
  __typename?: 'online_users_min_fields';
  last_seen?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "online_users" */
export type Online_Users_Mutation_Response = {
  __typename?: 'online_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Online_Users>;
};

/** Ordering options when selecting data from "online_users". */
export type Online_Users_Order_By = {
  last_seen?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "online_users" */
export enum Online_Users_Select_Column {
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "online_users" */
export type Online_Users_Set_Input = {
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "actions" */
  actions: Array<Actions>;
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate: Actions_Aggregate;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>;
  /** fetch data from the table: "creates" */
  creates: Array<Creates>;
  /** fetch aggregated fields from the table: "creates" */
  creates_aggregate: Creates_Aggregate;
  /** fetch data from the table: "creates" using primary key columns */
  creates_by_pk?: Maybe<Creates>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate: Online_Users_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootActionsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Query_RootActions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Query_RootActions_By_PkArgs = {
  action_id: Scalars['Int'];
};


export type Query_RootCreatesArgs = {
  distinct_on?: InputMaybe<Array<Creates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Creates_Order_By>>;
  where?: InputMaybe<Creates_Bool_Exp>;
};


export type Query_RootCreates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Creates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Creates_Order_By>>;
  where?: InputMaybe<Creates_Bool_Exp>;
};


export type Query_RootCreates_By_PkArgs = {
  create_id: Scalars['Int'];
};


export type Query_RootOnline_UsersArgs = {
  distinct_on?: InputMaybe<Array<Online_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Users_Order_By>>;
  where?: InputMaybe<Online_Users_Bool_Exp>;
};


export type Query_RootOnline_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Online_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Users_Order_By>>;
  where?: InputMaybe<Online_Users_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  user_id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "actions" */
  actions: Array<Actions>;
  /** fetch aggregated fields from the table: "actions" */
  actions_aggregate: Actions_Aggregate;
  /** fetch data from the table: "actions" using primary key columns */
  actions_by_pk?: Maybe<Actions>;
  /** fetch data from the table: "creates" */
  creates: Array<Creates>;
  /** fetch aggregated fields from the table: "creates" */
  creates_aggregate: Creates_Aggregate;
  /** fetch data from the table: "creates" using primary key columns */
  creates_by_pk?: Maybe<Creates>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate: Online_Users_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootActionsArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootActions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Actions_Order_By>>;
  where?: InputMaybe<Actions_Bool_Exp>;
};


export type Subscription_RootActions_By_PkArgs = {
  action_id: Scalars['Int'];
};


export type Subscription_RootCreatesArgs = {
  distinct_on?: InputMaybe<Array<Creates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Creates_Order_By>>;
  where?: InputMaybe<Creates_Bool_Exp>;
};


export type Subscription_RootCreates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Creates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Creates_Order_By>>;
  where?: InputMaybe<Creates_Bool_Exp>;
};


export type Subscription_RootCreates_By_PkArgs = {
  create_id: Scalars['Int'];
};


export type Subscription_RootOnline_UsersArgs = {
  distinct_on?: InputMaybe<Array<Online_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Users_Order_By>>;
  where?: InputMaybe<Online_Users_Bool_Exp>;
};


export type Subscription_RootOnline_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Online_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Users_Order_By>>;
  where?: InputMaybe<Online_Users_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  user_id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  user_id: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  user_id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', name: string, user_id: string }> };


export const GetUsersDocument = gql`
    query GetUsers {
  users(order_by: {user_id: asc}) {
    name
    user_id
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;