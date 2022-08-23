ALTER TABLE [Product] DROP CONSTRAINT [DF__Product__Categor__01142BA1]
GO
ALTER TABLE [Product] DROP CONSTRAINT [DF__Product__Price__00200768]
GO
ALTER TABLE [Product] DROP CONSTRAINT [DF__Product__Discoun__7F2BE32F]
GO
ALTER TABLE [Product] DROP CONSTRAINT [DF__Product__Rating__7E37BEF6]
GO
ALTER TABLE [Category] DROP CONSTRAINT [DF__Category__IsDele__7A672E12]
GO
ALTER TABLE [Category] DROP CONSTRAINT [DF__Category__IsActi__797309D9]
GO
ALTER TABLE [Category] DROP CONSTRAINT [Category_Default_Level]
GO
/****** Object:  Table [Product]    Script Date: 25-11-2021 19:49:26 ******/
DROP TABLE [Product]
GO
/****** Object:  Table [Category]    Script Date: 25-11-2021 19:49:26 ******/
DROP TABLE [Category]
GO
/****** Object:  Table [Category]    Script Date: 25-11-2021 19:49:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Category](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](250) NULL,
	[Level] [int] NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [Product]    Script Date: 25-11-2021 19:49:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Product](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](250) NULL,
	[Rating] [int] NULL,
	[Description] [varchar](8000) NULL,
	[Discount] [decimal](18, 0) NULL,
	[Price] [decimal](18, 0) NULL,
	[CategoryId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [Category] ON 
GO
INSERT [Category] ([Id], [Name], [Level], [IsActive], [IsDeleted]) VALUES (1, N'Mobile', 0, 1, 0)
GO
INSERT [Category] ([Id], [Name], [Level], [IsActive], [IsDeleted]) VALUES (2, N'Electronics', 0, 1, 0)
GO
SET IDENTITY_INSERT [Category] OFF
GO
SET IDENTITY_INSERT [Product] ON 
GO
INSERT [Product] ([id], [Name], [Rating], [Description], [Discount], [Price], [CategoryId]) VALUES (1, N'Samsung M 21', 4, N'Description to be added', CAST(0 AS Decimal(18, 0)), CAST(12 AS Decimal(18, 0)), 1)
GO
INSERT [Product] ([id], [Name], [Rating], [Description], [Discount], [Price], [CategoryId]) VALUES (2, N'Smart Watch', 4, N'Description to be added', CAST(0 AS Decimal(18, 0)), CAST(14 AS Decimal(18, 0)), 1)
GO
INSERT [Product] ([id], [Name], [Rating], [Description], [Discount], [Price], [CategoryId]) VALUES (3, N'Samsung M 31', 4, N'Description to be added', CAST(0 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), 1)
GO
INSERT [Product] ([id], [Name], [Rating], [Description], [Discount], [Price], [CategoryId]) VALUES (4, N'Ear Buds', 4, N'Description to be added', CAST(0 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), 1)
GO
INSERT [Product] ([id], [Name], [Rating], [Description], [Discount], [Price], [CategoryId]) VALUES (5, N'Samsung M 41', 4, N'Description to be added', CAST(0 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), 1)
GO
INSERT [Product] ([id], [Name], [Rating], [Description], [Discount], [Price], [CategoryId]) VALUES (6, N'Ear Buds 3', 4, N'Description to be added', CAST(0 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), 1)
GO
INSERT [Product] ([id], [Name], [Rating], [Description], [Discount], [Price], [CategoryId]) VALUES (7, N'Mi Phone', 4, N'Description to be added', CAST(0 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), 1)
GO
INSERT [Product] ([id], [Name], [Rating], [Description], [Discount], [Price], [CategoryId]) VALUES (8, N'Ear Buds Boat', 4, N'Description to be added', CAST(0 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), 1)
GO
INSERT [Product] ([id], [Name], [Rating], [Description], [Discount], [Price], [CategoryId]) VALUES (9, N'Nokia', 4, N'Description to be added', CAST(0 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), 1)
GO
INSERT [Product] ([id], [Name], [Rating], [Description], [Discount], [Price], [CategoryId]) VALUES (10, N'1', 4, N'Description to be added', CAST(0 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), 1)
GO
SET IDENTITY_INSERT [Product] OFF
GO
ALTER TABLE [Category] ADD  CONSTRAINT [Category_Default_Level]  DEFAULT ((0)) FOR [Level]
GO
ALTER TABLE [Category] ADD  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [Category] ADD  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [Product] ADD  DEFAULT ((4)) FOR [Rating]
GO
ALTER TABLE [Product] ADD  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [Product] ADD  DEFAULT ((0)) FOR [Price]
GO
ALTER TABLE [Product] ADD  DEFAULT ((1)) FOR [CategoryId]
GO
