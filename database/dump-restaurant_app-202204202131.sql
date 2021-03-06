PGDMP     
                    z            restaurant_app    14.2    14.2 '               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                        1262    16386    restaurant_app    DATABASE     c   CREATE DATABASE restaurant_app WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE restaurant_app;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            !           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            ?            1259    16442    access_level    TABLE     r   CREATE TABLE public.access_level (
    id smallint NOT NULL,
    name character varying,
    is_admin smallint
);
     DROP TABLE public.access_level;
       public         heap    postgres    false    3            ?            1259    16451    access_level_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.access_level_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.access_level_id_seq;
       public          postgres    false    213    3            "           0    0    access_level_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.access_level_id_seq OWNED BY public.access_level.id;
          public          postgres    false    214            ?            1259    16460    features    TABLE     ?   CREATE TABLE public.features (
    id integer NOT NULL,
    name character varying,
    path text,
    created_at time with time zone,
    updated_at time with time zone,
    deleted_at time with time zone
);
    DROP TABLE public.features;
       public         heap    postgres    false    3            ?            1259    16459    features_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.features_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.features_id_seq;
       public          postgres    false    3    216            #           0    0    features_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.features_id_seq OWNED BY public.features.id;
          public          postgres    false    215            ?            1259    16395    outlets    TABLE     ?   CREATE TABLE public.outlets (
    id bigint NOT NULL,
    name character varying,
    user_id bigint,
    created_at time with time zone,
    updated_at time with time zone,
    deleted_at time with time zone
);
    DROP TABLE public.outlets;
       public         heap    postgres    false    3            ?            1259    16394    restaurants_id_seq    SEQUENCE     {   CREATE SEQUENCE public.restaurants_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.restaurants_id_seq;
       public          postgres    false    210    3            $           0    0    restaurants_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.restaurants_id_seq OWNED BY public.outlets.id;
          public          postgres    false    209            ?            1259    16415    users    TABLE     ?   CREATE TABLE public.users (
    id bigint NOT NULL,
    username character varying NOT NULL,
    access_level_id smallint,
    created_at time with time zone,
    updated_at time with time zone,
    deleted_at time with time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false    3            ?            1259    16414    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    212    3            %           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    211            ?            1259    16469    users_role_priviledges    TABLE        CREATE TABLE public.users_role_priviledges (
    id integer NOT NULL,
    access_level_id smallint,
    features_id smallint,
    allow smallint,
    created_at time with time zone,
    updated_at time with time zone,
    deleted_at time with time zone
);
 *   DROP TABLE public.users_role_priviledges;
       public         heap    postgres    false    3            ?            1259    16468    users_role_priviledges_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_role_priviledges_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.users_role_priviledges_id_seq;
       public          postgres    false    218    3            &           0    0    users_role_priviledges_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.users_role_priviledges_id_seq OWNED BY public.users_role_priviledges.id;
          public          postgres    false    217            }           2604    16452    access_level id    DEFAULT     r   ALTER TABLE ONLY public.access_level ALTER COLUMN id SET DEFAULT nextval('public.access_level_id_seq'::regclass);
 >   ALTER TABLE public.access_level ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            ~           2604    16463    features id    DEFAULT     j   ALTER TABLE ONLY public.features ALTER COLUMN id SET DEFAULT nextval('public.features_id_seq'::regclass);
 :   ALTER TABLE public.features ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            {           2604    16398 
   outlets id    DEFAULT     l   ALTER TABLE ONLY public.outlets ALTER COLUMN id SET DEFAULT nextval('public.restaurants_id_seq'::regclass);
 9   ALTER TABLE public.outlets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            |           2604    16423    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212                       2604    16472    users_role_priviledges id    DEFAULT     ?   ALTER TABLE ONLY public.users_role_priviledges ALTER COLUMN id SET DEFAULT nextval('public.users_role_priviledges_id_seq'::regclass);
 H   ALTER TABLE public.users_role_priviledges ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218                      0    16442    access_level 
   TABLE DATA           :   COPY public.access_level (id, name, is_admin) FROM stdin;
    public          postgres    false    213   *                 0    16460    features 
   TABLE DATA           V   COPY public.features (id, name, path, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    216   9*                 0    16395    outlets 
   TABLE DATA           X   COPY public.outlets (id, name, user_id, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    210   ?*                 0    16415    users 
   TABLE DATA           b   COPY public.users (id, username, access_level_id, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    212   +                 0    16469    users_role_priviledges 
   TABLE DATA           }   COPY public.users_role_priviledges (id, access_level_id, features_id, allow, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    218   u+       '           0    0    access_level_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.access_level_id_seq', 2, true);
          public          postgres    false    214            (           0    0    features_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.features_id_seq', 4, true);
          public          postgres    false    215            )           0    0    restaurants_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.restaurants_id_seq', 36, true);
          public          postgres    false    209            *           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 16, true);
          public          postgres    false    211            +           0    0    users_role_priviledges_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.users_role_priviledges_id_seq', 4, true);
          public          postgres    false    217            ?           2606    16467    features features_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.features DROP CONSTRAINT features_pkey;
       public            postgres    false    216            ?           2606    16425    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    212            ?           2606    16474 2   users_role_priviledges users_role_priviledges_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.users_role_priviledges
    ADD CONSTRAINT users_role_priviledges_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.users_role_priviledges DROP CONSTRAINT users_role_priviledges_pkey;
       public            postgres    false    218               !   x?3?,-N-????2?LL????4?????? V??         J   x?3??/-?I-QH?/R(-N-?????M???? .cNǔ?"N?|0]??6J?f?)???Tr?'???=... ȁd         e   x?36?J-.?WNML?O?44?42?2 "s=3CKms~???)?sFfrvj??[>H?H????????T2??E??B??????	B?????? ?d$?         ]   x?34?,-N-?4?42?2??24Գ4??60????q?r&??f?qrZ?[???Y??rAj???L6ced?gfaU???????? ?~         #   x?3?4BC???2r??L?d?=... g	?     