export const containerStyles = {
  width: "100%",
  maxWidth: "1180px",
  mx: "auto",
  px: {
    xs: 2,
    md: 6,
  },
  py: {
    xs: 4,
    md: 8,
  },
};

export const headerStyles = {
  mb: 5,
};

export const subtitleStyles = {
  mt: 1,
  color: "text.secondary",
  fontSize: "1rem",
};

export const cardsContainerStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "repeat(3, 1fr)",
  },
  gap: 3,
};

export const cardStyles = {
  borderRadius: 4,
  border: "1px solid #E5E7EB",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
  transition: "0.2s ease",
  minHeight: 260,

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.14)",
  },
};

export const iconBoxStyles = {
  width: 72,
  height: 72,
  borderRadius: 3,
  backgroundColor: "#EEF4FF",
  color: "#2563EB",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: 3,

  "& svg": {
    fontSize: 40,
  },
};

export const buttonStyles = {
  mt: 2,
  borderRadius: 2,
  textTransform: "none",
  fontWeight: 600,
};