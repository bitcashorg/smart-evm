-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories for organizing smart lists
CREATE TABLE list_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(name)
);

-- Smart Lists (Topics)
CREATE TABLE smart_lists (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES list_categories(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    member_count INTEGER DEFAULT 0,
    follower_count INTEGER DEFAULT 0,
    quality_threshold INTEGER DEFAULT 70,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(name)
);

-- Twitter Accounts
CREATE TABLE accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    twitter_id TEXT UNIQUE NOT NULL,
    username TEXT NOT NULL,
    name TEXT,
    profile_image_url TEXT,
    status TEXT NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')),
    quality_score INTEGER NOT NULL CHECK (quality_score >= 0 AND quality_score <= 100),
    topic_relevance INTEGER NOT NULL CHECK (topic_relevance >= 0 AND topic_relevance <= 100),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- List Members (Accounts in Lists)
CREATE TABLE list_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    list_id UUID REFERENCES smart_lists(id) ON DELETE CASCADE,
    account_id UUID REFERENCES accounts(id) ON DELETE CASCADE,
    status TEXT NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')),
    quality_score INTEGER NOT NULL,
    topic_relevance INTEGER NOT NULL,
    review_notes TEXT,
    reviewed_by UUID REFERENCES auth.users(id),
    reviewed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(list_id, account_id)
);

-- Account Performance Metrics
CREATE TABLE account_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    account_id UUID REFERENCES accounts(id) ON DELETE CASCADE,
    engagement_rate DECIMAL(5,2),
    topic_tweet_frequency INTEGER,
    average_likes INTEGER,
    average_retweets INTEGER,
    trend DECIMAL(5,2),
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- List Followers (Users following lists)
CREATE TABLE list_followers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    list_id UUID REFERENCES smart_lists(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(list_id, user_id)
);

-- Review History
CREATE TABLE review_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    list_id UUID REFERENCES smart_lists(id),
    account_id UUID REFERENCES accounts(id),
    reviewer_id UUID REFERENCES auth.users(id),
    previous_status TEXT NOT NULL,
    new_status TEXT NOT NULL,
    quality_score INTEGER NOT NULL,
    topic_relevance INTEGER NOT NULL,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_list_members_status ON list_members(status);
CREATE INDEX idx_accounts_status ON accounts(status);
CREATE INDEX idx_list_members_list_id ON list_members(list_id);
CREATE INDEX idx_account_metrics_account_id ON account_metrics(account_id);
CREATE INDEX idx_review_history_list_id ON review_history(list_id);