USE [AMZI_HAM_#1]
GO
/****** Object:  Table [dbo].[Articulos]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Articulos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](50) NULL,
	[CostoUnitario] [decimal](18, 2) NULL,
 CONSTRAINT [PK_Articulos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clientes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
 CONSTRAINT [PK_Clientes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompraAProveedores]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompraAProveedores](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Total] [decimal](18, 2) NULL,
	[Impuesto] [decimal](18, 2) NULL,
	[Fecha] [datetime] NULL,
 CONSTRAINT [PK_CompraAProveedores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CompraAProveedoresDetalle]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompraAProveedoresDetalle](
	[IdCompra] [int] NOT NULL,
	[IdArticulo] [int] NOT NULL,
	[Cantidad] [int] NOT NULL,
	[Monto] [decimal](18, 2) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ConsumoDeCasa]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ConsumoDeCasa](
	[IdArticulo] [int] NOT NULL,
	[Cantidad] [int] NOT NULL,
	[Fecha] [datetime] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DetalleFactura]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DetalleFactura](
	[IdFactura] [int] NOT NULL,
	[IdArticulo] [int] NOT NULL,
	[Cantidad] [int] NOT NULL,
	[Monto] [decimal](18, 2) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Facturas]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Facturas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Total] [nchar](10) NULL,
	[NumeroCaja] [int] NULL,
	[Fecha] [datetime] NULL,
 CONSTRAINT [PK_Facturas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HistorialPagosDeCliente]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HistorialPagosDeCliente](
	[IdPago] [int] NOT NULL,
	[IdCliente] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inventario]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inventario](
	[IdArticulo] [int] NOT NULL,
	[Cantidad] [int] NOT NULL,
	[IdProveedor] [int] NOT NULL,
 CONSTRAINT [PK_Inventario] PRIMARY KEY CLUSTERED 
(
	[IdArticulo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PagosDeCliente]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PagosDeCliente](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Cantidad] [decimal](18, 2) NULL,
	[Fecha] [datetime] NULL,
 CONSTRAINT [PK_PagosDeCliente] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Proveedores]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Proveedores](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
 CONSTRAINT [PK_Proveedores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoCuentas]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoCuentas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](50) NULL,
 CONSTRAINT [PK_TipoCuentas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ventas]    Script Date: 11/21/2020 11:58:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ventas](
	[IdCliente] [int] NOT NULL,
	[IdFactura] [int] NOT NULL,
	[IdTipoCuenta] [int] NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Articulos] ON 
GO
INSERT [dbo].[Articulos] ([Id], [Descripcion], [CostoUnitario]) VALUES (1, N'PAN', CAST(242.50 AS Decimal(18, 2)))
GO
INSERT [dbo].[Articulos] ([Id], [Descripcion], [CostoUnitario]) VALUES (2, N'COMIDA', CAST(25.32 AS Decimal(18, 2)))
GO
INSERT [dbo].[Articulos] ([Id], [Descripcion], [CostoUnitario]) VALUES (3, N'ARROZ', CAST(232.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[Articulos] ([Id], [Descripcion], [CostoUnitario]) VALUES (4, N'FRIJOLES', CAST(72.30 AS Decimal(18, 2)))
GO
INSERT [dbo].[Articulos] ([Id], [Descripcion], [CostoUnitario]) VALUES (5, N'QUESO', CAST(6284.20 AS Decimal(18, 2)))
GO
INSERT [dbo].[Articulos] ([Id], [Descripcion], [CostoUnitario]) VALUES (6, N'HARINA', CAST(72.65 AS Decimal(18, 2)))
GO
INSERT [dbo].[Articulos] ([Id], [Descripcion], [CostoUnitario]) VALUES (7, N'TORILLAS', CAST(362.20 AS Decimal(18, 2)))
GO
INSERT [dbo].[Articulos] ([Id], [Descripcion], [CostoUnitario]) VALUES (8, N'ACEITE', CAST(26.30 AS Decimal(18, 2)))
GO
INSERT [dbo].[Articulos] ([Id], [Descripcion], [CostoUnitario]) VALUES (9, N'JAMON', CAST(72.70 AS Decimal(18, 2)))
GO
INSERT [dbo].[Articulos] ([Id], [Descripcion], [CostoUnitario]) VALUES (10, N'POLLO', CAST(38.20 AS Decimal(18, 2)))
GO
SET IDENTITY_INSERT [dbo].[Articulos] OFF
GO
SET IDENTITY_INSERT [dbo].[Clientes] ON 
GO
INSERT [dbo].[Clientes] ([Id], [Nombre]) VALUES (1, N'Maai')
GO
INSERT [dbo].[Clientes] ([Id], [Nombre]) VALUES (2, N'Juan')
GO
INSERT [dbo].[Clientes] ([Id], [Nombre]) VALUES (3, N'IOTA')
GO
INSERT [dbo].[Clientes] ([Id], [Nombre]) VALUES (4, N'KAPPA')
GO
INSERT [dbo].[Clientes] ([Id], [Nombre]) VALUES (5, N'ETA')
GO
INSERT [dbo].[Clientes] ([Id], [Nombre]) VALUES (6, N'ALPHA')
GO
INSERT [dbo].[Clientes] ([Id], [Nombre]) VALUES (7, N'OMEGA')
GO
INSERT [dbo].[Clientes] ([Id], [Nombre]) VALUES (8, N'ZETTA')
GO
INSERT [dbo].[Clientes] ([Id], [Nombre]) VALUES (9, N'CHARLIE')
GO
INSERT [dbo].[Clientes] ([Id], [Nombre]) VALUES (10, N'BRAVO')
GO
SET IDENTITY_INSERT [dbo].[Clientes] OFF
GO
SET IDENTITY_INSERT [dbo].[CompraAProveedores] ON 
GO
INSERT [dbo].[CompraAProveedores] ([Id], [Total], [Impuesto], [Fecha]) VALUES (1, CAST(24007.50 AS Decimal(18, 2)), CAST(3601.13 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[CompraAProveedores] ([Id], [Total], [Impuesto], [Fecha]) VALUES (2, CAST(2506.68 AS Decimal(18, 2)), CAST(376.00 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[CompraAProveedores] ([Id], [Total], [Impuesto], [Fecha]) VALUES (3, CAST(22968.00 AS Decimal(18, 2)), CAST(3445.20 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[CompraAProveedores] ([Id], [Total], [Impuesto], [Fecha]) VALUES (4, CAST(7157.70 AS Decimal(18, 2)), CAST(1073.66 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[CompraAProveedores] ([Id], [Total], [Impuesto], [Fecha]) VALUES (5, CAST(622135.80 AS Decimal(18, 2)), CAST(93320.37 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[CompraAProveedores] ([Id], [Total], [Impuesto], [Fecha]) VALUES (6, CAST(7192.55 AS Decimal(18, 2)), CAST(1078.88 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[CompraAProveedores] ([Id], [Total], [Impuesto], [Fecha]) VALUES (7, CAST(35857.80 AS Decimal(18, 2)), CAST(5378.67 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[CompraAProveedores] ([Id], [Total], [Impuesto], [Fecha]) VALUES (8, CAST(2603.70 AS Decimal(18, 2)), CAST(390.56 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[CompraAProveedores] ([Id], [Total], [Impuesto], [Fecha]) VALUES (9, CAST(7197.30 AS Decimal(18, 2)), CAST(1079.60 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[CompraAProveedores] ([Id], [Total], [Impuesto], [Fecha]) VALUES (10, CAST(3781.80 AS Decimal(18, 2)), CAST(567.27 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[CompraAProveedores] OFF
GO
INSERT [dbo].[CompraAProveedoresDetalle] ([IdCompra], [IdArticulo], [Cantidad], [Monto]) VALUES (1, 1, 99, CAST(24007.50 AS Decimal(18, 2)))
GO
INSERT [dbo].[CompraAProveedoresDetalle] ([IdCompra], [IdArticulo], [Cantidad], [Monto]) VALUES (2, 2, 99, CAST(2506.68 AS Decimal(18, 2)))
GO
INSERT [dbo].[CompraAProveedoresDetalle] ([IdCompra], [IdArticulo], [Cantidad], [Monto]) VALUES (3, 3, 99, CAST(22968.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[CompraAProveedoresDetalle] ([IdCompra], [IdArticulo], [Cantidad], [Monto]) VALUES (4, 4, 99, CAST(7157.70 AS Decimal(18, 2)))
GO
INSERT [dbo].[CompraAProveedoresDetalle] ([IdCompra], [IdArticulo], [Cantidad], [Monto]) VALUES (5, 5, 99, CAST(622135.80 AS Decimal(18, 2)))
GO
INSERT [dbo].[CompraAProveedoresDetalle] ([IdCompra], [IdArticulo], [Cantidad], [Monto]) VALUES (6, 6, 99, CAST(7192.55 AS Decimal(18, 2)))
GO
INSERT [dbo].[CompraAProveedoresDetalle] ([IdCompra], [IdArticulo], [Cantidad], [Monto]) VALUES (7, 7, 99, CAST(35857.80 AS Decimal(18, 2)))
GO
INSERT [dbo].[CompraAProveedoresDetalle] ([IdCompra], [IdArticulo], [Cantidad], [Monto]) VALUES (8, 8, 99, CAST(2603.70 AS Decimal(18, 2)))
GO
INSERT [dbo].[CompraAProveedoresDetalle] ([IdCompra], [IdArticulo], [Cantidad], [Monto]) VALUES (9, 9, 99, CAST(7197.30 AS Decimal(18, 2)))
GO
INSERT [dbo].[CompraAProveedoresDetalle] ([IdCompra], [IdArticulo], [Cantidad], [Monto]) VALUES (10, 10, 99, CAST(3781.80 AS Decimal(18, 2)))
GO
INSERT [dbo].[ConsumoDeCasa] ([IdArticulo], [Cantidad], [Fecha]) VALUES (1, 2, CAST(N'2020-06-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[ConsumoDeCasa] ([IdArticulo], [Cantidad], [Fecha]) VALUES (2, 5, CAST(N'2020-07-15T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[ConsumoDeCasa] ([IdArticulo], [Cantidad], [Fecha]) VALUES (3, 2, CAST(N'2020-08-25T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[ConsumoDeCasa] ([IdArticulo], [Cantidad], [Fecha]) VALUES (4, 7, CAST(N'2020-01-15T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[ConsumoDeCasa] ([IdArticulo], [Cantidad], [Fecha]) VALUES (5, 2, CAST(N'2020-07-15T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[ConsumoDeCasa] ([IdArticulo], [Cantidad], [Fecha]) VALUES (6, 6, CAST(N'2020-08-06T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[ConsumoDeCasa] ([IdArticulo], [Cantidad], [Fecha]) VALUES (7, 3, CAST(N'2020-11-15T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[ConsumoDeCasa] ([IdArticulo], [Cantidad], [Fecha]) VALUES (8, 7, CAST(N'2020-12-15T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[ConsumoDeCasa] ([IdArticulo], [Cantidad], [Fecha]) VALUES (9, 2, CAST(N'2020-01-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[ConsumoDeCasa] ([IdArticulo], [Cantidad], [Fecha]) VALUES (10, 723, CAST(N'2020-02-16T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[DetalleFactura] ([IdFactura], [IdArticulo], [Cantidad], [Monto]) VALUES (11, 1, 1, CAST(242.50 AS Decimal(18, 2)))
GO
INSERT [dbo].[DetalleFactura] ([IdFactura], [IdArticulo], [Cantidad], [Monto]) VALUES (12, 2, 5, CAST(126.60 AS Decimal(18, 2)))
GO
INSERT [dbo].[DetalleFactura] ([IdFactura], [IdArticulo], [Cantidad], [Monto]) VALUES (13, 3, 82, CAST(19024.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[DetalleFactura] ([IdFactura], [IdArticulo], [Cantidad], [Monto]) VALUES (14, 4, 8, CAST(578.40 AS Decimal(18, 2)))
GO
INSERT [dbo].[DetalleFactura] ([IdFactura], [IdArticulo], [Cantidad], [Monto]) VALUES (15, 5, 3, CAST(18852.60 AS Decimal(18, 2)))
GO
INSERT [dbo].[DetalleFactura] ([IdFactura], [IdArticulo], [Cantidad], [Monto]) VALUES (16, 6, 7, CAST(508.56 AS Decimal(18, 2)))
GO
INSERT [dbo].[DetalleFactura] ([IdFactura], [IdArticulo], [Cantidad], [Monto]) VALUES (17, 7, 4, CAST(1448.80 AS Decimal(18, 2)))
GO
INSERT [dbo].[DetalleFactura] ([IdFactura], [IdArticulo], [Cantidad], [Monto]) VALUES (18, 8, 7, CAST(184.10 AS Decimal(18, 2)))
GO
INSERT [dbo].[DetalleFactura] ([IdFactura], [IdArticulo], [Cantidad], [Monto]) VALUES (19, 9, 2, CAST(145.40 AS Decimal(18, 2)))
GO
INSERT [dbo].[DetalleFactura] ([IdFactura], [IdArticulo], [Cantidad], [Monto]) VALUES (20, 10, 6, CAST(229.20 AS Decimal(18, 2)))
GO
SET IDENTITY_INSERT [dbo].[Facturas] ON 
GO
INSERT [dbo].[Facturas] ([Id], [Total], [NumeroCaja], [Fecha]) VALUES (11, N' $452.00  ', 1, CAST(N'2020-11-21T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Facturas] ([Id], [Total], [NumeroCaja], [Fecha]) VALUES (12, N' $25.20   ', 2, CAST(N'2020-02-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Facturas] ([Id], [Total], [NumeroCaja], [Fecha]) VALUES (13, N' $125.00  ', 6, CAST(N'2020-06-24T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Facturas] ([Id], [Total], [NumeroCaja], [Fecha]) VALUES (14, N' $2,146.23', 2, CAST(N'2020-05-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Facturas] ([Id], [Total], [NumeroCaja], [Fecha]) VALUES (15, N' $4.21    ', 1, CAST(N'2020-01-07T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Facturas] ([Id], [Total], [NumeroCaja], [Fecha]) VALUES (16, N' $152.00  ', 2, CAST(N'2020-07-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Facturas] ([Id], [Total], [NumeroCaja], [Fecha]) VALUES (17, N' $234.00  ', 4, CAST(N'2020-07-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Facturas] ([Id], [Total], [NumeroCaja], [Fecha]) VALUES (18, N' $46.25   ', 2, CAST(N'2020-01-09T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Facturas] ([Id], [Total], [NumeroCaja], [Fecha]) VALUES (19, N' $3.25    ', 44, CAST(N'2020-01-10T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[Facturas] ([Id], [Total], [NumeroCaja], [Fecha]) VALUES (20, N' $242.00  ', 2, CAST(N'2020-02-10T00:00:00.000' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[Facturas] OFF
GO
INSERT [dbo].[HistorialPagosDeCliente] ([IdPago], [IdCliente]) VALUES (1, 1)
GO
INSERT [dbo].[HistorialPagosDeCliente] ([IdPago], [IdCliente]) VALUES (2, 2)
GO
INSERT [dbo].[HistorialPagosDeCliente] ([IdPago], [IdCliente]) VALUES (3, 3)
GO
INSERT [dbo].[HistorialPagosDeCliente] ([IdPago], [IdCliente]) VALUES (4, 5)
GO
INSERT [dbo].[HistorialPagosDeCliente] ([IdPago], [IdCliente]) VALUES (5, 6)
GO
INSERT [dbo].[HistorialPagosDeCliente] ([IdPago], [IdCliente]) VALUES (6, 8)
GO
INSERT [dbo].[HistorialPagosDeCliente] ([IdPago], [IdCliente]) VALUES (7, 9)
GO
INSERT [dbo].[HistorialPagosDeCliente] ([IdPago], [IdCliente]) VALUES (8, 10)
GO
INSERT [dbo].[HistorialPagosDeCliente] ([IdPago], [IdCliente]) VALUES (9, 4)
GO
INSERT [dbo].[HistorialPagosDeCliente] ([IdPago], [IdCliente]) VALUES (10, 7)
GO
INSERT [dbo].[Inventario] ([IdArticulo], [Cantidad], [IdProveedor]) VALUES (1, 99, 1)
GO
INSERT [dbo].[Inventario] ([IdArticulo], [Cantidad], [IdProveedor]) VALUES (2, 99, 2)
GO
INSERT [dbo].[Inventario] ([IdArticulo], [Cantidad], [IdProveedor]) VALUES (3, 99, 3)
GO
INSERT [dbo].[Inventario] ([IdArticulo], [Cantidad], [IdProveedor]) VALUES (4, 99, 4)
GO
INSERT [dbo].[Inventario] ([IdArticulo], [Cantidad], [IdProveedor]) VALUES (5, 99, 5)
GO
INSERT [dbo].[Inventario] ([IdArticulo], [Cantidad], [IdProveedor]) VALUES (6, 99, 6)
GO
INSERT [dbo].[Inventario] ([IdArticulo], [Cantidad], [IdProveedor]) VALUES (7, 99, 7)
GO
INSERT [dbo].[Inventario] ([IdArticulo], [Cantidad], [IdProveedor]) VALUES (8, 99, 8)
GO
INSERT [dbo].[Inventario] ([IdArticulo], [Cantidad], [IdProveedor]) VALUES (9, 99, 9)
GO
INSERT [dbo].[Inventario] ([IdArticulo], [Cantidad], [IdProveedor]) VALUES (10, 99, 10)
GO
SET IDENTITY_INSERT [dbo].[PagosDeCliente] ON 
GO
INSERT [dbo].[PagosDeCliente] ([Id], [Cantidad], [Fecha]) VALUES (1, CAST(452.00 AS Decimal(18, 2)), CAST(N'2020-11-21T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[PagosDeCliente] ([Id], [Cantidad], [Fecha]) VALUES (2, CAST(25.20 AS Decimal(18, 2)), CAST(N'2020-02-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[PagosDeCliente] ([Id], [Cantidad], [Fecha]) VALUES (3, CAST(125.00 AS Decimal(18, 2)), CAST(N'2020-06-24T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[PagosDeCliente] ([Id], [Cantidad], [Fecha]) VALUES (4, CAST(4.21 AS Decimal(18, 2)), CAST(N'2020-01-07T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[PagosDeCliente] ([Id], [Cantidad], [Fecha]) VALUES (5, CAST(152.00 AS Decimal(18, 2)), CAST(N'2020-07-11T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[PagosDeCliente] ([Id], [Cantidad], [Fecha]) VALUES (6, CAST(46.25 AS Decimal(18, 2)), CAST(N'2020-01-09T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[PagosDeCliente] ([Id], [Cantidad], [Fecha]) VALUES (7, CAST(3.25 AS Decimal(18, 2)), CAST(N'2020-01-10T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[PagosDeCliente] ([Id], [Cantidad], [Fecha]) VALUES (8, CAST(242.00 AS Decimal(18, 2)), CAST(N'2020-02-10T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[PagosDeCliente] ([Id], [Cantidad], [Fecha]) VALUES (9, CAST(2146.23 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[PagosDeCliente] ([Id], [Cantidad], [Fecha]) VALUES (10, CAST(234.00 AS Decimal(18, 2)), CAST(N'2020-12-12T00:00:00.000' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[PagosDeCliente] OFF
GO
SET IDENTITY_INSERT [dbo].[Proveedores] ON 
GO
INSERT [dbo].[Proveedores] ([Id], [Nombre]) VALUES (1, N'CAMARONINC')
GO
INSERT [dbo].[Proveedores] ([Id], [Nombre]) VALUES (2, N'POLLOInc')
GO
INSERT [dbo].[Proveedores] ([Id], [Nombre]) VALUES (3, N'PANINC')
GO
INSERT [dbo].[Proveedores] ([Id], [Nombre]) VALUES (4, N'QUESOInc')
GO
INSERT [dbo].[Proveedores] ([Id], [Nombre]) VALUES (5, N'CEUTEc')
GO
INSERT [dbo].[Proveedores] ([Id], [Nombre]) VALUES (6, N'UNITEC')
GO
INSERT [dbo].[Proveedores] ([Id], [Nombre]) VALUES (7, N'CATOLICA')
GO
INSERT [dbo].[Proveedores] ([Id], [Nombre]) VALUES (8, N'UTH')
GO
INSERT [dbo].[Proveedores] ([Id], [Nombre]) VALUES (9, N'UncEM')
GO
INSERT [dbo].[Proveedores] ([Id], [Nombre]) VALUES (10, N'COELGIO')
GO
SET IDENTITY_INSERT [dbo].[Proveedores] OFF
GO
SET IDENTITY_INSERT [dbo].[TipoCuentas] ON 
GO
INSERT [dbo].[TipoCuentas] ([Id], [Descripcion]) VALUES (1, N'Contado')
GO
INSERT [dbo].[TipoCuentas] ([Id], [Descripcion]) VALUES (2, N'Credito')
GO
SET IDENTITY_INSERT [dbo].[TipoCuentas] OFF
GO
INSERT [dbo].[Ventas] ([IdCliente], [IdFactura], [IdTipoCuenta]) VALUES (1, 11, 1)
GO
INSERT [dbo].[Ventas] ([IdCliente], [IdFactura], [IdTipoCuenta]) VALUES (2, 12, 1)
GO
INSERT [dbo].[Ventas] ([IdCliente], [IdFactura], [IdTipoCuenta]) VALUES (3, 13, 1)
GO
INSERT [dbo].[Ventas] ([IdCliente], [IdFactura], [IdTipoCuenta]) VALUES (4, 14, 2)
GO
INSERT [dbo].[Ventas] ([IdCliente], [IdFactura], [IdTipoCuenta]) VALUES (5, 15, 1)
GO
INSERT [dbo].[Ventas] ([IdCliente], [IdFactura], [IdTipoCuenta]) VALUES (6, 16, 1)
GO
INSERT [dbo].[Ventas] ([IdCliente], [IdFactura], [IdTipoCuenta]) VALUES (7, 17, 2)
GO
INSERT [dbo].[Ventas] ([IdCliente], [IdFactura], [IdTipoCuenta]) VALUES (8, 18, 1)
GO
INSERT [dbo].[Ventas] ([IdCliente], [IdFactura], [IdTipoCuenta]) VALUES (9, 19, 1)
GO
INSERT [dbo].[Ventas] ([IdCliente], [IdFactura], [IdTipoCuenta]) VALUES (10, 20, 1)
GO
ALTER TABLE [dbo].[CompraAProveedoresDetalle]  WITH CHECK ADD  CONSTRAINT [FK_CompraAProveedoresDetalle_Articulos] FOREIGN KEY([IdArticulo])
REFERENCES [dbo].[Articulos] ([Id])
GO
ALTER TABLE [dbo].[CompraAProveedoresDetalle] CHECK CONSTRAINT [FK_CompraAProveedoresDetalle_Articulos]
GO
ALTER TABLE [dbo].[CompraAProveedoresDetalle]  WITH CHECK ADD  CONSTRAINT [FK_CompraAProveedoresDetalle_CompraAProveedores] FOREIGN KEY([IdCompra])
REFERENCES [dbo].[CompraAProveedores] ([Id])
GO
ALTER TABLE [dbo].[CompraAProveedoresDetalle] CHECK CONSTRAINT [FK_CompraAProveedoresDetalle_CompraAProveedores]
GO
ALTER TABLE [dbo].[ConsumoDeCasa]  WITH CHECK ADD  CONSTRAINT [FK_ConsumoDeCasa_Articulos] FOREIGN KEY([IdArticulo])
REFERENCES [dbo].[Articulos] ([Id])
GO
ALTER TABLE [dbo].[ConsumoDeCasa] CHECK CONSTRAINT [FK_ConsumoDeCasa_Articulos]
GO
ALTER TABLE [dbo].[DetalleFactura]  WITH CHECK ADD  CONSTRAINT [FK_DetalleFactura_Articulos] FOREIGN KEY([IdArticulo])
REFERENCES [dbo].[Articulos] ([Id])
GO
ALTER TABLE [dbo].[DetalleFactura] CHECK CONSTRAINT [FK_DetalleFactura_Articulos]
GO
ALTER TABLE [dbo].[DetalleFactura]  WITH CHECK ADD  CONSTRAINT [FK_DetalleFactura_Facturas] FOREIGN KEY([IdFactura])
REFERENCES [dbo].[Facturas] ([Id])
GO
ALTER TABLE [dbo].[DetalleFactura] CHECK CONSTRAINT [FK_DetalleFactura_Facturas]
GO
ALTER TABLE [dbo].[HistorialPagosDeCliente]  WITH CHECK ADD  CONSTRAINT [FK_HistorialPagosDeCliente_Clientes] FOREIGN KEY([IdCliente])
REFERENCES [dbo].[Clientes] ([Id])
GO
ALTER TABLE [dbo].[HistorialPagosDeCliente] CHECK CONSTRAINT [FK_HistorialPagosDeCliente_Clientes]
GO
ALTER TABLE [dbo].[HistorialPagosDeCliente]  WITH CHECK ADD  CONSTRAINT [FK_HistorialPagosDeCliente_PagosDeCliente] FOREIGN KEY([IdPago])
REFERENCES [dbo].[PagosDeCliente] ([Id])
GO
ALTER TABLE [dbo].[HistorialPagosDeCliente] CHECK CONSTRAINT [FK_HistorialPagosDeCliente_PagosDeCliente]
GO
ALTER TABLE [dbo].[Inventario]  WITH CHECK ADD  CONSTRAINT [FK_Inventario_Articulos] FOREIGN KEY([IdArticulo])
REFERENCES [dbo].[Articulos] ([Id])
GO
ALTER TABLE [dbo].[Inventario] CHECK CONSTRAINT [FK_Inventario_Articulos]
GO
ALTER TABLE [dbo].[Inventario]  WITH CHECK ADD  CONSTRAINT [FK_Inventario_Proveedores] FOREIGN KEY([IdProveedor])
REFERENCES [dbo].[Proveedores] ([Id])
GO
ALTER TABLE [dbo].[Inventario] CHECK CONSTRAINT [FK_Inventario_Proveedores]
GO
ALTER TABLE [dbo].[Ventas]  WITH CHECK ADD  CONSTRAINT [FK_Ventas_Clientes] FOREIGN KEY([IdCliente])
REFERENCES [dbo].[Clientes] ([Id])
GO
ALTER TABLE [dbo].[Ventas] CHECK CONSTRAINT [FK_Ventas_Clientes]
GO
ALTER TABLE [dbo].[Ventas]  WITH CHECK ADD  CONSTRAINT [FK_Ventas_Facturas] FOREIGN KEY([IdFactura])
REFERENCES [dbo].[Facturas] ([Id])
GO
ALTER TABLE [dbo].[Ventas] CHECK CONSTRAINT [FK_Ventas_Facturas]
GO
ALTER TABLE [dbo].[Ventas]  WITH CHECK ADD  CONSTRAINT [FK_Ventas_TipoCuentas] FOREIGN KEY([IdTipoCuenta])
REFERENCES [dbo].[TipoCuentas] ([Id])
GO
ALTER TABLE [dbo].[Ventas] CHECK CONSTRAINT [FK_Ventas_TipoCuentas]
GO
