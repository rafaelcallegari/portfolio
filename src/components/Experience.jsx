import { motion } from 'framer-motion'
import AnimatedLine from './AnimatedLine'
import { containerVariants, itemVariants } from '../lib/motion'

/*
  Experience — histórico profissional + formação.

  Cada xp-item usa whileInView individualmente em vez de stagger do pai,
  porque a lista é longa e o stagger ficaria muito lento para o último item.
  Aqui cada linha entra com seu próprio fade ao entrar no viewport.
*/

function XpItem({ when, role, where, desc }) {
  return (
    <motion.div
      className="xp-item"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="xp-when">{when}</div>
      <div>
        <p className="xp-role">{role}</p>
        <span className="xp-where">{where}</span>
        {desc && <p className="xp-desc">{desc}</p>}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experiencia">
      <AnimatedLine />

      <motion.div
        className="wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
        style={{ paddingTop: 64 }}
      >
        <motion.p className="eyebrow" variants={itemVariants}>// currículo</motion.p>
        <motion.h2 className="sec-title" variants={itemVariants}>Experiência</motion.h2>

        <div className="xp">
          <XpItem
            when="12/2025 — atual"
            role="Estagiário"
            where="Itaú Unibanco"
            desc="Criação, execução e manutenção de automações para otimizar os fluxos da equipe, com foco crescente na integração de IA nos processos do dia a dia. Participo de projetos de IA aplicada ao ambiente corporativo e de análise de dados."
          />
          <XpItem
            when="01/2025 — 11/2025"
            role="Jovem Aprendiz"
            where="Itaú Unibanco"
            desc="Análise de dados e desenvolvimento de automações para tarefas do dia a dia, otimizando os fluxos da equipe. Responsável pela publicação e controle de documentos internos."
          />
          <XpItem
            when="09/2024 — 12/2024"
            role="Auxiliar Técnico I"
            where="PwC"
            desc="Análise e tratamento de dados, elaboração de planilhas estruturadas e visualizações para apoiar a leitura e a tomada de decisão, sempre com entregas dentro dos prazos."
          />
          <XpItem
            when="02/2024 — 04/2024"
            role="Desenvolvedor Júnior"
            where="Smart Staff"
            desc="Gerenciamento de infraestrutura em nuvem (AWS EC2), terminal Linux (Ubuntu), suporte interno e implementação de softwares. Administração de e-mails corporativos via Office Admin Panel, uso de ferramentas HashiCorp (Nomad e Vault) e renovação de certificados SSL."
          />
          <XpItem
            when="09/2023 — 01/2024"
            role="Estagiário"
            where="Smart Staff"
            desc="Relacionamento com clientes, análise de dados, configuração de software e suporte técnico."
          />
          <XpItem
            when="05/2022 — 08/2023"
            role="Estagiário de Suporte de TI"
            where="Colégio Ateneu"
            desc="Suporte técnico interno e externo, gerenciamento de redes, controle básico de acessos e conhecimento de Google Admin."
          />
        </div>

        <motion.p
          className="sub-eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          // formação
        </motion.p>

        <div className="xp">
          <XpItem
            when="03/2025 — 08/2026"
            role="Pós-Graduação em Machine Learning"
            where="FIAP"
          />
          <XpItem
            when="02/2022 — 12/2023"
            role="Tecnólogo em Análise e Desenvolvimento de Sistemas"
            where="FATEC Antônio Russo"
            desc="Ensino superior integrado ao projeto P-TECH."
          />
          <XpItem
            when="2019 — 2021"
            role="Técnico em Desenvolvimento de Sistemas"
            where="ETEC Jorge Street"
            desc="Formação integrada ao programa P-TECH (parceria Centro Paula Souza + Volkswagen do Brasil), com 200h de mentorias, palestras, projetos e visitas técnicas."
          />
        </div>

        <motion.p
          className="sub-eyebrow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          // idiomas
        </motion.p>
        <motion.div
          className="stack"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="chip">Inglês — intermediário</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
