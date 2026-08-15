"use client";
import { useGetAllSkillQuery } from "@/redux/api/skillApi";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { colors, radii } from "@/constant/design";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";

interface Skill {
  id: string;
  name: string;
  image: string;
  parcentage: number;
}

type CategoryKey = "frontend" | "backend" | "database" | "tools";

const categories: { key: CategoryKey; label: string; match: RegExp }[] = [
  { key: "frontend", label: "Frontend", match: /html|css|javascript|typescript|react|next|redux|tailwind|material|bootstrap|vue|svelte|shadcn/i },
  { key: "backend", label: "Backend", match: /node|express|nest|prisma|graphql|rest|api|auth|jwt|socket/i },
  { key: "database", label: "Database", match: /mongo|postgre|mysql|sqlite|redis|supabase|firebase|dynamo/i },
  { key: "tools", label: "Tools & Technologies", match: /git|docker|github|gitlab|vercel|netlify|aws|azure|jira|linux|vscode|storybook|jenkins/i },
];

const getCategory = (name: string): CategoryKey => {
  for (const cat of categories) {
    if (cat.match.test(name)) return cat.key;
  }
  return "tools";
};

const Skills = () => {
  const { data } = useGetAllSkillQuery({});

  const grouped = categories
    .map((cat) => ({
      ...cat,
      skills: (data || []).filter((s: Skill) => getCategory(s.name) === cat.key),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <Section id="skill" sx={{ py: { xs: 7, sm: 9, md: 12 } }}>
      <Container>
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              My <Box component="span" sx={{ color: colors.primary }}>Tech Stack</Box>
            </>
          }
          subtitle="The technologies I use to transform ideas into reliable, scalable, and high-performance web applications."
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 6, md: 8 } }}>
          {grouped.map((cat, catIndex) => (
            <Box key={cat.key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 3,
                    mt: catIndex > 0 ? 0 : 0,
                  }}
                >
                  <Typography
                    sx={{
                      color: colors.primary,
                      fontWeight: 700,
                      fontSize: { xs: "1.05rem", md: "1.2rem" },
                      letterSpacing: "0.02em",
                    }}
                  >
                    {cat.label}
                  </Typography>
                  <Box sx={{ flex: 1, height: 1, background: colors.border }} />
                  <Typography sx={{ color: colors.textMuted, fontSize: "0.8rem", fontWeight: 500 }}>
                    {String(cat.skills.length).padStart(2, "0")}
                  </Typography>
                </Box>
              </motion.div>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" },
                  gap: 2.5,
                }}
              >
                {cat.skills.map((skill: Skill, index: number) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
                    whileHover={{ y: -4 }}
                  >
                    <Box
                      sx={{
                        background: colors.card,
                        border: `1px solid ${colors.border}`,
                        borderRadius: radii.lg,
                        p: 2.5,
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: colors.borderHover,
                          background: colors.cardHover,
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: radii.sm,
                            background: colors.backgroundSecondary,
                            border: `1px solid ${colors.border}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "all 0.25s ease",
                            ".MuiBox-root:hover > &": {
                              borderColor: colors.borderHover,
                            },
                          }}
                        >
                          <Image
                            src={skill.image}
                            alt={`${skill.name} icon`}
                            width={26}
                            height={26}
                            style={{ objectFit: "contain" }}
                          />
                        </Box>
                        <Typography
                          sx={{
                            color: colors.textPrimary,
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            flex: 1,
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography sx={{ color: colors.primary, fontWeight: 700, fontSize: "0.85rem" }}>
                          {skill.parcentage}%
                        </Typography>
                      </Box>

                      <Box sx={{ height: 6, borderRadius: 999, background: colors.backgroundSecondary, overflow: "hidden" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.parcentage}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 + Math.min(index * 0.05, 0.3) }}
                          style={{
                            height: "100%",
                            borderRadius: 999,
                            background: `linear-gradient(90deg, ${colors.primaryDark}, ${colors.primary})`,
                          }}
                        />
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default Skills;